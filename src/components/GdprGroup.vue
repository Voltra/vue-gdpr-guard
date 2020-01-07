<script>
    import enabledState from "../mixins/enabledState"
    import renderless from "../mixins/renderless"

    export default {
        name: "gdpr-group",
        render(){
            return this.$renderless({
                group: this.group,
                guards: this.group.guards,
                manager: this.manager,

                toggle: this.toggle,
                enable: this.enable,
                disableForItem: this.disable,
            });
        },
        mixins: [enabledState, renderless],
        props: {
            group: {
                type: Object,
                required: true,
            },
            recursive: {
                type: Boolean,
                default: true,
            }
        },
        inject: [
            "manager",
            "groups",
        ],
        provide(){
            return {
                group: this.group,
                guards: this.group.guards,
                groupSlot: this.$scopedSlots.default.bind(this.$scopedSlots),
                recursiveGuard: this.recursive,
            };
        },
        data(){
            return {
                toggle: this.toggleForItem(this.group),
                enable: this.enableForItem(this.group),
                disable: this.disableForItem(this.group),
            };
        },
        computed: {
            hasGroups(){
                return "groups" in this.group;
            },
        },
    }
</script>