# vue-gdpr-guard

<center><img src="./vue-gdpr-guard.png" alt="Logo" width="250"/></center>

`vue-gdpr-guard` is the Vue binding for the library `gdpr-guard`.
It exposes components as well as a plugin that allows to use `gdpr-guard` without the hassle of knowing how to wire you components.
It uses *~~almost~~* renderless components and scoped-slots in order to provide maximum customization.



You can have a look at the [guide](https://voltra.github.io/vue-gdpr-guard/).
You can also have a look at this [code sandbox](https://codesandbox.io/embed/serverless-moon-fl5tc?fontsize=14&hidenavigation=1&theme=dark) to see a minimal example.



## Example

MyComponent.vue

```vue
<template>
	<GdprManager>
		<template #default="{ groups, enable, disable }">
			<div class="gdpr-container">
				<button @click="enable">Enable all</button>
				<button @click="disable">Disable all</button>

				<GdprGroup v-for="group in groups" :key="group.name">
					<template #default="{ guards, toggle }">
						<div class="gdpr-container group">
						   <label>Group {{ group.name }}</label>
						   <MyAwesomeSwitch
								:label="`Toggle ${group.name}`"
								 :value="group.enabled"
								 @switch="toggle"/>

							<GdprGuard v-for="guard in guards" :key="guard.name">
								<template #default="{ toggle }">
									<!--
									By default, it will reuse the group slot above if there are
									groups inside groups
							  		-->
									<div class="gdpr-item">
										<label>{{ guard.name }}</label>
										<MyAwesomeSwitch
											:label="`Toggle ${guard.name}`"
											:value="guard.enabled"
											@switch="toggle"/>
									</div>
								</template>
						   </GdprGuard>
						</div>
					</template>
				</GdprGroup>
			</div>
		</template>
    </GdprManager>
</template>

<script>
	import { GdprManager, GdprGroup, GdprGuard } from "vue-gdpr-guard"

    export default {
        components: {
            GdprManager,
            GdprGroup,
            GdprGuard,
        },
    }
</script>
```



index.js

```javascript
import { VueGdprGuard } from "vue-gdpr-guard"
import { GdprManagerBuilder } from "gdpr-guard"
import Vue from "vue"

const factory = () => GdprManagerBuilder.make()
	// [...]
.build();

const savior = /* get/create a GdprSavior */;

Vue.use(VueGdprGuard, {
    factory,
    savior,
});

// mount app
```



## What is available?

### Components

`GdprManager`, `GdprGroup` and `GdprGuard` are renderless vue components that are available to you to compose your UI.
Note that these are not the classes from `gdpr-guard`, you can import these directly from that package
(`vue-gdpr-guard` has it in its dependencies).



### Helpers

`VueGdprGuard` is the vue plugin to register in order to use the library.
Note that it requires a `factory` as well as a `savior` in its installation options.

### Mixin

`gdprMixin` gives access to logic to handle the "options screen" in your app:
```typescript
// interface that describes the mixin
interface gdprMixin{
    components: {
        GdprManager: typeof GdprManager,
        GdprGroup: typeof GdprGroup,
        GdprGuard: typeof GdprGuard,
    },
    props: {
        opened?: bool, // defaults to false
    },
    methods: {
        enableAll: () => any,
        disableAll: () => any,
        close: () => any,
        discard: () => Promise<boolean>,
        save: () => Promise<boolean>,
    },
}
```
