export default {
    methods: {
        toggleForItem({ name }){
            return () => this.$gdpr.toggle(name);
        },
        toggleItem(item){
            this.toggleForItem(item)();
        },
        enableForItem({ name }){
            return () => this.$gdpr.enable(name);
        },
        enableItem(item){
            this.enableForItem(item)();
        },
        disableForItem({ name }){
            return () => this.$gdpr.disable(name);
        },
        disableItem(item){
            this.disableForItem(item)()
        },
    },
}