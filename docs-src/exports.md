# Exports

```js
import {
    VueGdprGuard,
    
    GdprManager,
    GdprGroup,
    GdprGuard,
} from "vue-gdpr-guard"
```



## VueGdprGuard

This is the plugin that you need to register in order to use the components in your application, simply call

```javascript
Vue.use(VueGdprGuard, config);
```

| Config key | type                                                         | required           |
| ---------- | ------------------------------------------------------------ | ------------------ |
| manager    | [`gdprGuard.GdprManager`](https://voltra.github.io/gdpr-guard/classes/gdprmanager.html) | :heavy_check_mark: |

:::tip

It is recommended to use [`GdprManagerBuilder`](https://voltra.github.io/gdpr-guard/classes/gdprmanagerbuilder.html) to create your managers. This is available to you through `vue-gdpr-guard`'s dependency on `gdpr-guard` :

```javascript
import {
    GdprManagerBuilder,
    GdprStorage,
    // [...]
} from "gdpr-guard"
```



:::



## Vue Components

::: tip

You can browse each components' documentation [here](/components/)

:::



`GdprManager`, `GdprGroup` and `GdprGuard` are all renderless components, meaning that they don't actually render HTML of their own, instead they render the content from the default slot.

The only caveat of this approach is that, when rendering, the components will only take into account the first element of the slot :



```html
<MyRenderlessComponent>
	<div class="a"></div>
	<div class="b"></div>
</MyRenderlessComponent>
```

will render to

```html
<div class="a"></div>
```



This approach is used to adhere to the main focus of the library : Give the developers complete control over the rendering, ease the use of feature toggling based on GDPR preferences.

This way, you can use Antd, Bootstrap or whatever components you feel like using while still getting all the advantages from the domain-specific logic.