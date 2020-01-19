<script>
    import enabledState from "../mixins/enabledState"
    import renderless from "../mixins/renderless"
    import GdprGroup from "./GdprGroup.vue"

    //TODO: Fix recursion problem (infinite)

    export default {
        render(h){
            if(!this.hasGuards){
                // regular guard
                return this.$renderless(this.guardPayload);
            }else if(this.recursiveGuard){
                return !this.recursiveGuard
                ? null //group but don't handle
                : h(
                    GdprGroup, //component
                    this.groupRenderOptions, //options
                    [this.$gdprGroup.$renderless(this.groupProps)], //children
                ); // group and recursive
            }
        },
        mixins: [enabledState, renderless],
        components: {
            GdprGroup,
        },
        props: {
            guard: {
                type: Object,
                required: true,
            },
        },
        inject: [
            "manager",
            "group",
            "groupSlot",
            "recursiveGuard",
            "$gdprGroup",
        ],
        data(){
            return {
                toggle: this.toggleForItem(this.guard),
                enable: this.enableForItem(this.guard),
                disable: this.disableForItem(this.guard),
            };
        },
        methods: {
            renderGroup(){
                return this.groupSlot(this.groupPayload);
            }
        },
        computed: {
            hasGuards(){
                return "guards" in this.guard;
            },
            sharedPayload(){
                return {
                    manager: this.manager,
                    group: this.group,
                };
            },
            guardPayload(){
                return {
                    ...this.sharedPayload,
                    guard: this.guard,

                    toggleGuard: this.toggle,
                    enableGuard: this.enable,
                    disableGuard: this.disable,
                };
            },
            groupPayload(){
                return {
                    ...this.sharedPayload,
                    group: this.guard,
                    guards: this.guard.guards,

                    toggleGroup: this.toggle,
                    enableGroup: this.enable,
                    disableGroup: this.enable,
                };
            },
            groupProps(){
                return {
                    group: this.guard,
                    recursive: this.recursiveGuard,
                };
            },
            groupRenderOptions(){
                return {
                    props: this.groupProps,
                    scopedSlots: {
                        default: this.$gdprGroup.$renderless,
                    }
                };
            }
        },
    }
</script>