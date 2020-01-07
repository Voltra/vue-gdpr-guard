export default {
    methods: {
        $renderless(props = {}, slot = "default"){
            return this.$scopedSlot[slot](props)[0];
        }
    }
}