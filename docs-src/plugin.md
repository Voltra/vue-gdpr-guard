---
next: /components/
---



# Plugin

:::warning

The plugin does not automatically register the components

:::

​	

To register the plugin, first you must create/get an instance of [`GdprManager`](https://voltra.github.io/gdpr-guard/classes/gdprmanager.html). Once you've got your instance, you can pass it into the plugin's registration options object :

```javascript
import Vue from "vue"
import { VueGdprGuard } from "vue-gdpr-guard"
import { GdprManagerBuilder, GdprStorage } from "gdpr-guard"

const manager = restoreGdprManagerOrCreate(() => {
    return GdprManagerBuilder.make()
    	// [...]
    .build();
});

Vue.use(VueGdprGuard, { manager });
```

