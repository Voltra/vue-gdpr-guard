import type { GdprGuardGroupRaw, GdprManagerRaw } from "gdpr-guard";
import Vue, { ComponentOptions } from "vue";

export type GdprManagerComponent = ComponentOptions<
	Vue,
	{
		manager: GdprManagerRaw;
		toggle(): void;
		enable(): void;
		disable(): void;
		onGdprCharge(): void;
	},
	{
		provided: {
			manager: GdprManagerRaw;
			groups: GdprGuardGroupRaw[];
		};
	}
>;
