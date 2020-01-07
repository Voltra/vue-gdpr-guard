<template>
    <div class="gdpr-manager__guard">
        <slot
            :guard="guard"
            :toggle="toggle"
            :enable="enable"
            :disable="disable"

            :group="group"
            :manager="manager"/>
    </div>
</template>

<script>
    import enabledState from "../mixins/enabledState"

    export default {
        mixins: [enabledState],
        props: {
            guard: {
                type: Object,
                required: true,
            },
        },
        inject: [
            "manager",
            "group",
        ],
        data(){
            return {
                toggle: this.toggleForItem(this.guard),
                enable: this.enableForItem(this.guard),
                disable: this.disableForItem(this.guard),
            };
        },
    }
</script>