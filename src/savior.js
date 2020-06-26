import { GdprSaviorAdapter } from "gdpr-guard"

class VueSavior extends GdprSaviorAdapter{
	/**
	 * Wrap a GdprSavior in a VueSavior
	 * @param {(typeof Vue)|Vue} Vue - The Vue class (or instance) in use
	 * @param {GdprSavior} savior - The savior to wrap
	 */
	constructor(Vue, savior){
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
	__nextTick(cb){
		if("$nextTick" in this.vm){
			this.vm.$nextTick(cb);
		} else if("nextTick" in this.vm){
			this.vm.nextTick(cb);
		}
	}

	async updateSharedManager(manager){
		await this.savior.updateSharedManager(manager);

		if("$gdpr" in this.vm){
			const { $gdpr } = this.vm;
			if(manager == $gdpr.manager) // exact same object, no need to swap
				return;

			$gdpr.manager = manager;
		}else{
			this.__nextTick(() => this.updateSharedManager(manager));
		}
	}

	//// Delegate

	check(){
		return this.savior.check();
	}

	exists(shouldUpdate = true){
		return this.savior.exists(shouldUpdate);
	}

	restore(shouldUpdate = true){
		return this.savior.restore(shouldUpdate);
	}

	restoreOrCreate(factory){
		return this.savior.restoreOrCreate(factory);
	}

	store(manager){
		return this.savior.store(manager);
	}

	storeIfNotExists(manager){
		return this.savior.storeIfNotExists(manager);
	}
}

export {
	VueSavior,
}
