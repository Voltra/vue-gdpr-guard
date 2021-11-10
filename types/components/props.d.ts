import type { GdprGuardRaw, GdprGuardGroupRaw } from "gdpr-guard"

export type GdprGroupProps = {
	group: GdprGuardGroupRaw;
	recursive: boolean;
};

export type GdprGuardProps = {
	guard: GdprGuardRaw;
};
