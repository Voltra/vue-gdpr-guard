<script>
	import enabledState from "../mixins/enabledState";
	import renderless from "../mixins/renderless";
	import GdprGroup from "./GdprGroup.vue";

	export default {
		components: {
			GdprGroup,
		},
		mixins: [
			enabledState,
			renderless,
		],
		inject: [
			"manager",
			"group",
			"groupSlot",
			"recursiveGuard",
			"$gdprGroup",
		],
		props: {
			guard: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				toggle: this.toggleForItem(this.guard),
				enable: this.enableForItem(this.guard),
				disable: this.disableForItem(this.guard),
			};
		},
		computed: {
			hasGuards() {
				return "guards" in this.guard;
			},
			sharedPayload() {
				return {
					manager: this.manager,
					group: this.group,
				};
			},
			guardPayload() {
				return {
					...this.sharedPayload,
					guard: this.guard,

					toggleGuard: this.toggle,
					enableGuard: this.enable,
					disableGuard: this.disable,
				};
			},
			groupPayload() {
				return {
					...this.sharedPayload,
					group: this.guard,
					guards: this.guard.guards,

					toggleGroup: this.toggle,
					enableGroup: this.enable,
					disableGroup: this.enable,
				};
			},
			groupProps() {
				return {
					group: this.guard,
					recursive: this.recursiveGuard,
				};
			},
			groupRenderOptions() {
				return {
					props: this.groupProps,
					scopedSlots: {
						default: this.$gdprGroup.$renderless,
					},
				};
			},
		},
		methods: {
			renderGroup() {
				return this.groupSlot(this.groupPayload);
			},
		},
		render(h) {
			if (!this.hasGuards) {
				// regular guard
				return this.$renderless(this.guardPayload);
			} else if (this.recursiveGuard) { // group and recursive
				return h(
					GdprGroup, //component
					this.groupRenderOptions, //options
					[this.$gdprGroup.$renderless(this.groupProps)], //children
				);
			}

			//group but don't handle
			return null;
		},
	};
</script>
