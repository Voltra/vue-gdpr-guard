import type { GdprGuardRaw, GdprGuardGroupRaw, GdprManagerRaw } from "gdpr-guard"
import type { GdprGroupProps, GdprGuardProps } from "./props";
import type { RenderlessFunction } from "../helpers";
import Vue, { ComponentOptions } from "vue"


export type GdprGuardComponent = ComponentOptions<
	Vue,
	{
		toggle(): void;
		enable(): void;
		disable(): void;
	},
	{
		hasGuards: boolean;
		sharedPayload: {
			manager: GdprManagerRaw;
			group: GdprGuardGroupRaw;
		};
		guardPayload: {
			manager: GdprManagerRaw;
			group: GdprGuardGroupRaw;
			guard: GdprGuardRaw;
			toggleGuard(): void;
			enableGuard(): void;
			disableGuard(): void;
		};
		groupPayload: {
			manager: GdprManagerRaw;
			group: GdprGuardGroupRaw;
			guards: GdprGuardRaw[];
			toggleGroup(): void;
			enableGroup(): void;
			disableGroup(): void;
		};
		groupProps: GdprGroupProps;
		groupRenderOptions: {
			props: GdprGroupProps;
			scopedSlots: {
				default: RenderlessFunction<GdprGroupProps>;
			};
		};
	},
	GdprGuardProps,
	GdprGuardProps
>;
