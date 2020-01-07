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
export default {
    props: {
        guard: {
            type: Object,
            required: true,
        },
    },
    inject: [
        "manager",
        "group",
        "handler",
    ],
    data(){
        return {
            toggle: () => this.handler.toggleForItem(this.guard),
            guard_: this.$gdpr.getGuard(this.guard.name),
        };
    },
    computed: {
        enable(){
            return this.guard_ && this.guard_.enable();
        },
        disable(){
            return this.guard_ && this.guard_.disable();
        },
    },
}
</script>