import Vue, { ComponentOptions } from "vue";

export type GdprMixinProps = {
	opened?: boolean;
};

export type GdprMixin = ComponentOptions<
	Vue,
	{},
	{
		enableAll(): void;
		disableAll(): void;
		close(): void;
		discard(): Promise<boolean>;
		save(): Promise<boolean>;
	},
	{},
	GdprMixinProps,
	GdprMixinProps
>;
