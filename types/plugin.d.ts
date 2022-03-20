import type { GdprSavior, GdprManagerFactory } from "gdpr-guard/dist/gdpr_guard"
import type { PluginObject } from "vue/types"

export type VueGdprGuardPluginOptions = {
	savior: GdprSavior;
	factory: GdprManagerFactory;
};

export type VueGdprGuardPlugin = PluginObject<VueGdprGuardPluginOptions>;
