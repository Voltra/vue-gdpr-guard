# GdprGuard

This component exposes a guard's state. It is also responsible for rendering sub-groups if the [GdprGroup](/components/GdprGroup)'s `recursive` props is `true`.

```vue
<GdprGuard :guard="g" slot-scope="{ guard, toggleGuard }">
	{{ guard.name }}
    
    <MyAwesomeSwitch
    	@change="toggleGuard"
    	:value="guard.enabled"
    	:disabled="guard.required"/>
</GdprGuard>
```



<u>Props</u>

| props | Type                                                         | Description         | Required           | Default |
| ----- | ------------------------------------------------------------ | ------------------- | ------------------ | ------- |
| guard | [`GdprGuardRaw`](https://voltra.github.io/gdpr-guard/interfaces/gdprguardraw.html) | The guard to manage | :heavy_check_mark: | :x:     |

<u>Slot scope</u>

| Slot props   | Type                                                         | Description                                                 |
| ------------ | ------------------------------------------------------------ | ----------------------------------------------------------- |
| guard        | [`GdprGuardRaw`](https://voltra.github.io/gdpr-guard/interfaces/gdprguardraw.html) | allows access to the guard's state                          |
| toggleGuard  | `() => void`                                                 | toggle the group state and set every state to its new value |
| enableGuard  | `() => void`                                                 | enable every guards and sub-groups                          |
| disableGuard | `() => void`                                                 | disable every guards and sub-groups                         |
| manager      | [`GdprManagerRaw`](https://voltra.github.io/gdpr-guard/classes/gdprmanagerraw.html) | allows access to the manager's state                        |
| group        | [`GdprGuardGroupRaw`](https://voltra.github.io/gdpr-guard/interfaces/gdprguardgroupraw.html) | allows access to the group's state                          |

