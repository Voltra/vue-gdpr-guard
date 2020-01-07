<template>
    <div class="gdpr-manager__guard">
        <slot
            v-if="!hasGuards"
            :guard="guard"
            :toggle="toggle"
            :enable="enable"
            :disable="disable"

            :group="group"
            :manager="manager"/>

            <template v-else-if="recursiveGuard">
                <GdprGuard
                    :group="guard"
                    :recursive="recursiveGuard"
                    v-html="groupSlot({
                        group: guard,
                        guards: group.guards,
                        manager,
                        toggle,
                        enable,
                        disable,
                    })"/>
            </template>
    </div>
</template>

<script>
    import enabledState from "../mixins/enabledState"
    import renderless from "../mixins/renderless"
    import GdprGuard from "./GdprGuard.vue"

    export default {
        render(h){
            if(!this.hasGuards){
                // regular guard
                return this.$renderless(this.guardPayload);
            }else if(this.recursiveGuard){
                // group and recursive
                return h(GdprGuard, this.groupProps, this.renderGroup());
            }else{
                //group but don't handle
                return null;
            }
        },
        mixins: [enabledState, renderless],
        components: {
            GdprGuard,
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
            guardPayload(){
                return {
                    guard: this.guard,
                    toggle: this.toggle,
                    enable: this.enable,
                    disable: this.disable,

                    group: this.group,
                    manager: this.manager,
                };
            },
            groupPayload(){
                return {
                    ...this.guardPayload,
                    group: this.guard,
                    guards: this.guard.guards,
                };
            },
            groupProps(){
                return {
                    props: {
                        group: this.guard,
                        recursive: this.recursiveGuard,
                    }
                };
            }
        },
    }
</script>