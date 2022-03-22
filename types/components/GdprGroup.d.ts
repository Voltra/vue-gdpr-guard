import type { GdprGuardGroupRaw, GdprGuardRaw } from "gdpr-guard";
import Vue, { ComponentOptions } from "vue";
import type { RenderFunction } from "../helpers";
import type { GdprGroupProps, GdprGuardProps } from "./props";



export type GdprGroupComponent = ComponentOptions<
	Vue,
	{
		toggle(): void;
		enable(): void;
		disable(): void;
	},
	{
		hasGroups: boolean;
		provided: {
			group: GdprGuardGroupRaw;
			guards: GdprGuardRaw[];
			groupSlot: RenderFunction<GdprGroupProps|GdprGuardProps>;
			recursiveGuard: boolean;
			$gdprGroup: Vue;
		};
	},
	GdprGroupProps,
	GdprGroupProps
>;
