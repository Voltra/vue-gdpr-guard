<template>
    <div class="gdpr-manager">
        <slot
            :groups="groups"
            :manager="manager"

            :toggle="toggle"
            :enable="enable"
            :disable="disable"/>
    </div>
</template>

<script>
    export default {
        data(){
            /**
             * @type {object} o
             * @type {import("gdpr-guard/dist/GdprManager").GdprManagerRaw} o.manager
             */
            return {
                manager: this.$gdpr.raw(),
                toggle: () => this.$gdpr.toggle(),
                enable: () => this.$gdpr.enable(),
                disable: () => this.$gdpr.disable(),
            };
        },
        provide(){
            return {
                handler: this,
                manager: this.manager,
                groups: this.manager.groups,
            }
        },
        mounted(){
            this.$gdpr.$on("change", () => {
                this.$deepmerge(this.manager, this.$gdpr.raw());
            });
        },
        methods: {
            toggleForItem(item){
                return () => this.$gdpr.toggle(item.name);
            },
            toggleItem(item){
                this.toggleForItem(item)();
            },
        },
    }
</script>