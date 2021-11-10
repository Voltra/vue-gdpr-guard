/**
 * Create the class that wraps a manager
 * @param {typeof import("vue")} Vue
 */
export const ManagerWrapperFactory = Vue => class ManagerWrapper extends Vue {
	/**
	 * Construct a manager wrapper from the gdpr manager
	 * @param {import("gdpr-guard/dist/GdprManager").GdprManager} manager
	 */
	constructor(manager) {
		super({
			data: {
				manager,
			},
		});

		this.hotswap(manager);
	}

	/**
	 * Swap the wrapped manager on the fly
	 * @param {import("gdpr-guard/dist/GdprManager").GdprManager} manager
	 * @returns {import("gdpr-guard/dist/GdprManager").GdprManager|null}
	 */
	hotswap(manager) {
		const oldManager = this.manager;
		Vue.set(this, "manager", manager);
		this.$emitEvent("hotswap");
		return oldManager || null;
	}

	/**
	 * Emit a wrapper event
	 * @protected
	 * @ignore
	 * @param {string} event Event name
	 * @param  {...any} args Arguments to pass
	 * @returns {ManagerWrapper}
	 */
	$emitEvent(event, ...args) {
		// console.log(`Emitting "${event}"`);
		this.$emit("change", ...args);
		this.$emit(event, ...args);
		return this;
	}

	/**
	 * Get the raw representation of the wrapped manager
	 * @returns {import("gdpr-guard/dist/GdprManager").GdprManagerRaw}
	 */
	raw() {
		return this.manager.raw();
	}

	/**
	 * @alias {ManagerWrapper#raw}
	 */
	json() {
		return this.raw();
	}

	toString() {
		return JSON.stringify(this.json());
	}

	_wrap(method, target = null, ...args) {
		if (target === null) {
			this.manager[method](...args);
			return this.$emitEvent(method, ...args);
		}

		if (this.hasGuard(target)) {
			this.getGuard(target)[method](...args);
			return this.$emitEvent(method, ...args);
		}

		return this;
	}

	disable(target = null) {
		return this._wrap("disable", target);
	}

	enable(target = null) {
		return this._wrap("enable", target);
	}

	toggle(target = null) {
		return this._wrap("toggle", target);
	}

	disableForStorage(storage, target = null) {
		return this._wrap("disableForStorage", target, storage);
	}

	enableForStorage(storage, target = null) {
		return this._wrap("enableForStorage", target, storage);
	}

	toggleForStorage(storage, target = null) {
		return this._wrap("toggleForStorage", target, storage);
	}

	isEnabled(name) {
		return this.manager.isEnabled(name);
	}

	hasGroup(groupName) {
		return this.manager.hasGroup(groupName);
	}

	hasGuard(guardName) {
		return this.manager.hasGuard(guardName);
	}

	getGroup(groupName) {
		return this.manager.getGroup(groupName);
	}

	getGuard(guardName) {
		return this.manager.getGuard(guardName);
	}
};
