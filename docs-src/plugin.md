---
next: /components/
---



# Plugin

:::warning

The plugin does not automatically register the components

:::

​	

To register the plugin, first you must provide a [`GdprManagerFactory`](https://voltra.github.io/gdpr-guard/globals.html#gdprmanagerfactory) as well as a [`GdprSavior`](https://voltra.github.io/gdpr-guard/interfaces/gdprsavior.html). Once you've got  both, you can pass them into the plugin's registration options object :

```javascript
import Vue from "vue"
import { VueGdprGuard } from "vue-gdpr-guard"
import { GdprManagerBuilder, GdprStorage } from "gdpr-guard"

const savior = /* [...] */;

const factory = () => {
    return GdprManagerBuilder.make()
    	// [...]
    .build();
};

Vue.use(VueGdprGuard, {
    factory,
    savior,
});
```

