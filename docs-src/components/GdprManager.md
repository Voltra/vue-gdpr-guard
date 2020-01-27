# GdprManager

This component exposes the "global" state contained in the `manager` prop. It also exposes the `groups` data that is meant to be used to render [`GdprGroup`](/components/GdprGroup) components.

```vue
<GdprManager>
	<MyComp slot-scope="{ manager, groups, toggleManager }">
    	GDPR <MyAwesomeSwitch @change="toggle" :value="manager.enabled"/>
        
        <GdprGroup v-for="g in groups">
        	<!-- [...] -->
        </GdprGroup>
    </MyComp>
</GdprManager>
```

<u>Slot scope</u>

| Slot props     | Type                                                         | Description                                                  |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| manager        | [`GdprManagerRaw`](https://voltra.github.io/gdpr-guard/interfaces/gdprmanagerraw.html) | allows access to the manager's state                         |
| groups         | [`GdprGuardGroupRaw[]`](https://voltra.github.io/gdpr-guard/interfaces/gdprguardgroupraw.html) | access the registered groups' data                           |
| toggleManager  | `() => void`                                                 | toggle the manager state and set every state to its new value |
| enableManager  | `() => void`                                                 | enable every state                                           |
| disableManager | `() => void`                                                 | disable every state                                          |
