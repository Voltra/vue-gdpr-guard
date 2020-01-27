# vue-gdpr-guard

`vue-gdpr-guard` is the Vue binding for the library `gdpr-guard`. It exposes components as well as a plugin that allows to use `gdpr-guard` without the hassle of knowing how to wire you components. It uses *~~almost~~* renderless components and scoped-slots in order to provide maximum customization.



You can have a look at the [guide](https://voltra.github.io/vue-gdpr-guard/). You can also have a look at this [code sandbox](https://codesandbox.io/embed/serverless-moon-fl5tc?fontsize=14&hidenavigation=1&theme=dark) to see a minimal example.



## Example

MyComponent.vue

```vue
<template>
	<GdprManager>
    	<div class="gdpr-container" :slot-scope="{ groups, enable, disable }">
            <button @click="enable">Enable all</button>
            <button @click="disable">Disable all</button>
        	
            <GdprGroup v-for="group in groups" :key="group.name">
            	<div class="gdpr-container group" :slot-scope="{ guards, toggle }">
                   <label>Group {{ group.name }}</label>
                   <MyAwesomeSwitch
                   		:label="`Toggle ${group.name}`"
                         :value="group.enabled"
                         @switch="toggle"/>
                    
                    <GdprGuard v-for="guard in guards" :key="guard.name">
                        <!-- By default, it will reuse the group slot above if there are
							groups inside groups
					  -->
                        <div class="gdpr-item" :slot-scope="{ toggle }">
                            <label>{{ guard.name }}</label>
                            <MyAwesomeSwitch
                            	:label="`Toggle ${guard.name}`"
                                 :value="guard.enabled"
                                 @switch="toggle"/>
					  </div>
    			   </GdprGuard>
                </div>
    		</GdprGroup>
    	</div>
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

const manager = GdprManagerBuilder.make()
	// [...]
.build();

Vue.use(VueGdprGuard, { manager });

// mount app
```



## What is available?

### Components

`GdprManager`, `GdprGroup` and `GdprGuard` are renderless vue components that are available to you to compose your UI. Note that these are not the classes from `gdpr-guard`, you can import these directly from that package (`vue-gdpr-guard` has it in its dependencies).



### Helpers

`VueGdprGuard` is the vue plugin to register in order to use the library. Note that it requires a `manager` in its installation options.