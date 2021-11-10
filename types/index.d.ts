import type { GdprStorage } from "gdpr-guard";
import type { ManagerWrapper, VueSavior } from "./classes"
import type { VueGdprGuardPlugin } from "./plugin";
import type { GdprManagerComponent, GdprGroupComponent, GdprGuardComponent } from "./components"
import type { GdprMixin } from "./mixins";

export * from "./helpers";
export * from "./mixins";
export * from "./classes";
export * from "./components";
export * from "./plugin";

declare module "vue/types/vue" {
	interface Vue {
		readonly $gdpr: ManagerWrapper;
		readonly $gdpr_savior: VueSavior;
		readonly $GdprStorage: typeof GdprStorage;
	}

	interface VueConstructor {
		readonly $gdpr: ManagerWrapper;
		readonly $gdpr_savior: VueSavior;
		readonly $GdprStorage: typeof GdprStorage;
	}
}

// declare module "vue-gdpr-guard" {

export declare const VueGdprGuard: VueGdprGuardPlugin;
export declare const GdprManager: GdprManagerComponent;
export declare const GdprGroup: GdprGroupComponent;
export declare const GdprGuard: GdprGuardComponent;
export declare const gdprMixin: GdprMixin;

// }
