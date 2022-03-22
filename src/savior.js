import { GdprSaviorAdapter } from "gdpr-guard";

export class VueSavior extends GdprSaviorAdapter {
	/**
	 * Wrap a GdprSavior in a VueSavior
	 * @param {(typeof Vue)|Vue} Vue - The Vue class (or instance) in use
	 * @param {import("gdpr-guard/dist/serde/GdprSavior").GdprSavior} savior - The savior to wrap
	 */
	constructor(Vue, savior) {
		super();
		this.vm = Vue;
		this.savior = savior;
	}

	/**
	 * Execute a callback on next tick
	 * @protected
	 * @ignore
	 * @param {() => any} cb - The callback to execute
	 */
	__nextTick(cb) {
		if ("$nextTick" in this.vm) {
			this.vm.$nextTick(cb);
		} else if ("nextTick" in this.vm) {
			this.vm.nextTick(cb);
		}
	}

	/**
	 * @inheritDoc
	 * @override
	 */
	async updateSharedManager(manager) {
		await this.savior.updateSharedManager(manager);

		if ("$gdpr" in this.vm) {
			const { $gdpr } = this.vm;
			// exact same object, no need to swap
			if (manager === $gdpr.manager) {
				return;
			}

			$gdpr.hotswap(manager);
		} else {
			this.__nextTick(() => this.updateSharedManager(manager));
		}
	}

	//// Delegate

	/**
	 * @inheritDoc
	 * @override
	 */
	check() {
		return this.savior.check();
	}

	/**
	 * @inheritDoc
	 * @override
	 */
	exists(shouldUpdate = true) {
		return this.savior.exists(shouldUpdate);
	}

	/**
	 * @inheritDoc
	 * @override
	 */
	restore(shouldUpdate = true) {
		return this.savior.restore(shouldUpdate);
	}

	/**
	 * @inheritDoc
	 * @override
	 */
	restoreOrCreate(factory) {
		return this.savior.restoreOrCreate(factory);
	}

	/**
	 * @inheritDoc
	 * @override
	 */
	store(manager) {
		return this.savior.store(manager);
	}

	/**
	 * @inheritDoc
	 * @override
	 */
	storeIfNotExists(manager) {
		return this.savior.storeIfNotExists(manager);
	}
}
