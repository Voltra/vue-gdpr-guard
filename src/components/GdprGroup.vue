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
                v-for="gp in group.groups"
                :key="gp.name" v-html="$scopedSlots.default({
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
    export default {
        name: "gdpr-group",
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
            "handler",
        ],
        provide(){
            return {
                group: this.group,
                guards: this.group.guards,
            };
        },
        data(){
            return {
                toggle: () => this.handler.toggleForGroup(this.group),
                group_: this.$gdpr.getGroup(this.group.name),
            };
        },
        computed: {
            hasGroups(){
                return "groups" in this.group;
            },
            enable(){
                return () => this.group_ && this.group_.enable();
            },
            disable(){
                return () => this.group_ && this.group_.disable();
            },
        },
    }
</script>