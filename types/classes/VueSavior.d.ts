import type { GdprSavior, GdprSaviorAdapter, GdprManager, GdprManagerRaw } from "gdpr-guard";
import type Vue from "vue";
import type { VueConstructor } from "vue";

export declare class VueSavior extends GdprSaviorAdapter {
	protected vue: Vue|VueConstructor;
	protected savior: GdprSavior;

	constructor(
		vue: Vue | VueConstructor,
		savior: GdprSavior
	);

	protected __nextTick(cb: () => void): void;

	restore(shouldUpdate?: boolean): Promise<GdprManager | null>;

	store(manager: GdprManagerRaw): Promise<boolean>;

	updateSharedManager(manager: GdprManager): Promise<void>;
}
