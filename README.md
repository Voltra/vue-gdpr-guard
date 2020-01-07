# vue-gdpr-guard

`vue-gdpr-guard` is the Vue binding for the library `gdpr-guard`. It exposes components as well as a plugin that allows to use `gdpr-guard` without the hassle of knowing how to wire you components. It uses *~~almost~~* renderless components and scoped-slots in order to provide maximum customization.



## By Example

```vue
<template>
	<GdprManager>
    	<div class="gdpr-container" :slot-scope="{groups, toggle, manager, disable}">
            <MyAwesomeSwitch label="Toggle All" :value="manager.enabled" @switch="toggle"/>
            <button @click="enable">Enable all</button>
            <button @click="disable">Disable all</button>
        	
            <GdprGroup v-for="group in groups" :key="group.name">
            	<div class="gdpr-container group" :slot-scope="{group, toggle, guards}">
                   <MyAwesomeSwitch :label="`Toggle ${group.name}`" :value="group.enabled" @switch="toggle"/>
                    
                    <GdprGuard v-for="guard in guards" :key="guard.name">
                        <div class="gdpr-item">
                            <MyAwesomeSwitch :label="`Toggle ${guard.name}`" :value="guard.enabled"/>
					  </div>
    			   </GdprGuard>
                </div>
    		</GdprGroup>
    	</div>
    </GdprManager>
</template>

<script>
	import { GdprManager, GdprGroup, GdprGuard } from "vue-gdpr-guard"
</script>
```

