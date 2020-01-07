import { ManagerWrapperFactory } from "./wrapper"
import VueDeepMerge from "./plugins/deepmerge"
import GdprManager from "./components/GdprManager.vue"
import GdprGroup from "./components/GdprGroup.vue"
import GdprGuard from "./components/GdprGuard.vue"

const VueGdprGuard = {
    /**
     * @type {import("vue/types/plugin").PluginFunction}
     */
    install(Vue, options){
        Vue.use(VueDeepMerge);

        const ManagerWrapper = ManagerWrapperFactory(Vue);
        const wrapper = new ManagerWrapper(options.manager);

        const desc = {
            get: () => wrapper,
            configurable: false,
            enumerable: true,
            writable: false,
        };

        Object.defineProperties(Vue.prototype, {
            "$gdpr": desc,
        });

        Object.defineProperties(Vue, {
            "gdpr": desc,
        });
    }
};

export {
    VueGdprGuard,

    GdprManager,
    GdprGroup,
    GdprGuard,
}
