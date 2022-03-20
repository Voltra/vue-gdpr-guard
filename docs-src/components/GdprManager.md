# GdprManager

This component exposes the "global" state contained in the `manager` prop. It also exposes the `groups` data that is meant to be used to render [`GdprGroup`](/components/GdprGroup) components.

```vue
<GdprManager>
	<template #default="{ manager, groups, toggleManager }">
		<MyComp>
			GDPR <MyAwesomeSwitch @change="toggle" :value="manager.enabled"/>

			<GdprGroup v-for="g in groups">
				<!-- [...] -->
			</GdprGroup>
		</MyComp>
	</template>
</GdprManager>
```

<u>Slot scope</u>

| Slot props     | Type                                                                                                          | Description                                                   |
|----------------|---------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| manager        | [`GdprManagerRaw`](https://voltra.github.io/gdpr-guard/interfaces/GdprManager.GdprManagerRaw.html)            | allows access to the manager's state                          |
| groups         | [`GdprGuardGroupRaw[]`](https://voltra.github.io/gdpr-guard/interfaces/GdprGuardGroup.GdprGuardGroupRaw.html) | access the registered groups' data                            |
| toggleManager  | `() => void`                                                                                                  | toggle the manager state and set every state to its new value |
| enableManager  | `() => void`                                                                                                  | enable every state                                            |
| disableManager | `() => void`                                                                                                  | disable every state                                           |
