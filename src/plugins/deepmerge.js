// Taken from https://github.com/vuejs/vue/issues/9853

const plugin = {
    install(Vue){
        const deepmerge = (baseValue, value) => {
            // merge arrays
            if (Array.isArray(baseValue) && Array.isArray(value)) {
                for (let i = 0; i < value.length; i  ) {
                    let val = Vue.deepmerge(baseValue[i], value[i]);
                    if (val === undefined)
                        continue;
                    if (baseValue[i])
                        Vue.set(baseValue, i, val);
                    else
                        baseValue.push(val);
                }
            }

            // merge objects
            else if (
                value
                && baseValue
                && typeof value === 'object'
                && typeof object === 'object'
            ) {
                for (let key of Object.keys(value)) {
                    let val = Vue.deepmerge(baseValue[key], value[key]);
                    if (val === undefined)
                        continue;
                    Vue.set(baseValue, key, val);
                }
            }

            // return value
            else if (value !== undefined)
                return value;
            else
                return baseValue;
        };

        Vue.prototype.$deepmerge = deepmerge;
        Vue.deepmerge = deepmerge;
    }
}

export default plugin