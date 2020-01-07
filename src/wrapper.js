/**
 * Create the class that wraps a manager
 * @param {typeof import("vue")} Vue
 */
const ManagerWrapperFactory = Vue => class ManagerWrapper extends Vue{
    /**
     * Construct a manager wrapper from the gdpr manager
     * @param {import("gdpr-guard/dist/GdprManager").GdprManager} manager
     */
    constructor(manager){
        super();
        this.manager = manager;
    }

    /**
     * Emit a wrapper event
     * @protected
     * @ignore
     * @param {string} event Event name
     * @param  {...any} args Arguments to pass
     * @returns {ManagerWrapper}
     */
    $emitEvent(event, ...args){
        this.$emit("change", ...args);
        this.$emit(event, ...args);
        return this;
    }

    /**
     * Get the raw representation of the wrapped manager
     * @returns {import("gdpr-guard/dist/GdprManager").GdprManagerRaw}
     */
    raw(){
        return this.manager.raw();
    }

    /**
     * @alias {ManagerWrapper#raw}
     */
    json(){
        return this.raw();
    }

    toString(){
        return JSON.stringify(this.json());
    }

    disable(){
        this.manager.disable();
        return this.$emitEvent("disable");
    }

    enable(){
        this.manager.enable();
        return this.$emitEvent("enable");
    }

    toggle(){
        this.manager.toggle();
        return this.$emitEvent("toggle");
    }

    disableForStorage(storage){
        this.manager.disableForStorage(storage);
        return this.$emitEvent("disableForStorage", storage);
    }

    enableForStorage(storage){
        this.manager.enableForStorage(storage);
        return this.$emitEvent("enableForStorage", storage);
    }

    toggleForStorage(storage){
        this.manager.toggleForStorage(storage);
        return this.$emitEvent("toggleForStorage", storage);
    }

    isEnabled(name){
        return this.manager.isEnabled(name);
    }

    hasGroup(groupName){
        return this.manager.hasGroup(groupName);
    }

    hasGuard(guardName){
        return this.manager.hasGuard(guardName);
    }

    getGroup(groupName){
        return this.manager.getGroup(groupName);
    }

    getGuard(guardName){
        return this.manager.getGuard(guardName);
    }
};

export {
    ManagerWrapperFactory,
}