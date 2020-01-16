export default {
    methods: {
        $renderless(props = {}, slot = "default"){
            console.warn(this.$scopedSlots[slot]);
            return this.$scopedSlots[slot](props)[0];
        }
    }
}