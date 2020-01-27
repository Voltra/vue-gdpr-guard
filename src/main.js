import { ManagerWrapperFactory } from "./wrapper"
// import VueDeepMerge from "./plugins/deepmerge"
import GdprManager from "./components/GdprManager.vue"
import GdprGroup from "./components/GdprGroup.vue"
import GdprGuard from "./components/GdprGuard.vue"
import { GdprStorage } from "gdpr-guard"

//TODO: Allow hotswap of managers


const VueGdprGuard = {
    /**
     * @type {import("vue/types/plugin").PluginFunction}
     */
    install(Vue, options){
        // Vue.use(VueDeepMerge);

        const ManagerWrapper = ManagerWrapperFactory(Vue);
        const wrapper = new ManagerWrapper(options.manager);

        const desc = val => ({
            value: val,
            configurable: false,
            enumerable: true,
            writable: false,
        });

        [{
            key: "gdpr",
            value: desc(wrapper),
        }, {
            key: "GdprStorage",
            value: desc(GdprStorage),
        }].forEach(({key, value}) => {
            Object.defineProperties(Vue.prototype, {
                [`$${key}`]: value,
            });

            Object.defineProperties(Vue, {
                [key]: value,
            });
        });
    }
};

export {
    VueGdprGuard,

    GdprManager,
    GdprGroup,
    GdprGuard,
}
