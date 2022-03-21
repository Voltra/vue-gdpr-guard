<script>
	import renderless from "../mixins/renderless";

	export default {
		mixins: [renderless],
		provide() {
			return this.provided;
		},
		data() {
			/**
			 * @type {object} o
			 * @type {import("gdpr-guard/dist/GdprManager").GdprManagerRaw} o.manager
			 */
			return {
				manager: this.$gdpr.raw(),
				toggle: () => this.$gdpr.toggle(),
				enable: () => this.$gdpr.enable(),
				disable: () => this.$gdpr.disable(),

				onGdprChange: () => {
					this.manager = this.$gdpr.raw();
				},
			};
		},
		computed: {
			provided() {
				return {
					manager: this.manager,
					groups: this.manager.groups,
				};
			},
		},
		mounted() {
			this.$gdpr.$on("change", this.onGdprChange);
		},
		beforeDestroy() {
			this.$gdpr.$off("change", this.onGdprChange);
		},
		render() {
			return this.$renderless({
				...this.provided,

				toggleManager: this.toggle,
				enableManager: this.enable,
				disableManager: this.disable,
			});
		},
	};
</script>
