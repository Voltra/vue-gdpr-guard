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
    import GdprGuard from "./GdprGuard.vue"

    export default {
        mixins: [enabledState],
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
        computed: {
            hasGuards(){
                return "guards" in this.guard;
            }
        },
    }
</script>