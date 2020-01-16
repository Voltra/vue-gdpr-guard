export default {
    methods: {
        toggleForItem({ name }){
            return () => this.$gdpr.hasGuard(name) && this.$gdpr.getGuard(name).toggle();
        },
        toggleItem(item){
            this.toggleForItem(item)();
        },
        enableForItem({ name }){
            return () => this.$gdpr.hasGuard(name) && this.$gdpr.getGuard(name).enable();
        },
        enableItem(item){
            this.enableForItem(item)();
        },
        disableForItem({ name }){
            return () => this.$gdpr.hasGuard(name) && this.$gdpr.getGuard(name).disable();
        },
        disableItem(item){
            this.disableForItem(item)()
        },
    },
}