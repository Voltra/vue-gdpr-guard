<template>
    <div class="gdpr-manager__group">
        <slot
            :group="group"
            :guards="group.guards"
            :manager="manager"

            :toggle="toggle"
            :enable="enable"
            :disable="disable"/>
    </div>
</template>

<script>
    import enabledState from "../mixins/enabledState"

    export default {
        name: "gdpr-group",
        mixins: [enabledState],
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