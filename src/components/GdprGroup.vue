<template>
    <div class="gdpr-manager__group">
        <slot
            :group="group"
            :guards="group.guards"
            :manager="manager"

            :toggle="toggle"
            :enable="enable"
            :disable="disable"/>

        <template v-if="hasGroups && recursive">
            <gdpr-group
                :recursive="recursive"
                v-for="gp in group.groups"
                :key="gp.name"
                v-html="$scopedSlots.default({
                    group: gp,
                    guards: gp.guards,
                    manager,

                    toggle: handler.toggleForItem(gp),
                    enable: () => $gdpr.hasGroup(gp.name) && $gdpr.getGroup(gp.name).enable(),
                    disable: () => $gdpr.hasGroup(gp.name) && $gdpr.getGroup(gp.name).disable(),
            })">
            </gdpr-group>
        </template>
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