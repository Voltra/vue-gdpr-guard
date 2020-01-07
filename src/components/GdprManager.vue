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

                onGdprChange: () => {
                    this.$deepmerge(this.manager, this.$gdpr.raw());
                },
            };
        },
        provide(){
            return {
                manager: this.manager,
                groups: this.manager.groups,
            }
        },
        created(){
            this.$gdpr.$on("change", this.onGdprChange);
        },
        beforeDestroy(){
            this.$gdpr.$off("change", this.onGdprChange);
        },
    }
</script>