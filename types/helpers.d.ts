export type GdprTarget = string;
export type OptionalGdprTarget = GdprTarget | null;
export type RenderFunction<Props> =
	| ((
			this: undefined,
			createElement: CreateElement,
			context: RenderContext<Props>
	  ) => VNode | VNode[])
	| (() => null);
export type RenderlessFunction<Props> = (
	props: Props
) => null | VNode | VNode[];
