import type { GdprSavior, GdprManagerFactory } from "gdpr-guard"
import type { PluginObject } from "vue"

export type VueGdprGuardPluginOptions = {
	savior: GdprSavior;
	factory: GdprManagerFactory;
};

export type VueGdprGuardPlugin = PluginObject<VueGdprGuardPluginOptions>;
