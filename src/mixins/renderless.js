export default {
	methods: {
		$renderless(props = {}, slot = "default") {
			return this.$scopedSlots[slot](props)[0];
		},
	},
};
