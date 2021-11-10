import { GdprSavior, GdprSaviorAdapter } from "gdpr-guard";
import Vue, { VueConstructor } from "vue";

export declare class VueSavior extends GdprSaviorAdapter {
	constructor(
		protected vue: Vue | VueConstructor,
		protected savior: GdprSavior
	);

	protected __nextTick(cb: () => void): void;
}
