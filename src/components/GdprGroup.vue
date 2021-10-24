<script>
	import enabledState from "../mixins/enabledState";
	import renderless from "../mixins/renderless";

	export default {
		name: "GdprGroup",
		mixins: [
			enabledState,
			renderless,
		],
		inject: [
			"manager",
			"groups",
		],
		provide() {
			return this.provided;
		},
		props: {
			group: {
				type: Object,
				required: true,
			},
			recursive: {
				type: Boolean,
				default: true,
			},
		},
		data() {
			return {
				toggle: this.toggleForItem(this.group),
				enable: this.enableForItem(this.group),
				disable: this.disableForItem(this.group),
			};
		},
		computed: {
			hasGroups() {
				return "groups" in this.group;
			},
			provided() {
				const groupSlot = (this.$scopedSlots && "default" in this.$scopedSlots)
					? (...args) => this.$renderless(...args)
					: () => null;

				return {
					group: this.group,
					guards: this.group.guards,
					groupSlot,
					recursiveGuard: this.recursive,
					$gdprGroup: this,
				};

			},
		},
		render() {
			return this.$renderless({
				group: this.group,
				guards: this.group.guards,
				manager: this.manager,

				toggleGroup: this.toggle,
				enableGroup: this.enable,
				disableGroup: this.disable,
			});
		},
	};
</script>
