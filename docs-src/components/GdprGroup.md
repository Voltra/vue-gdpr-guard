# GdprGroup

This component exposes the group's state contained within the `group` prop. It also exposes the child `guards` that are meant to be used to render [GdprGuard](/components/GdprGuard) components.

```vue
<GdprGroup :group="g" slot-scope="{ group, guards, toggleGroup }">
	{{ group.name }}
    
    <MyAwesomeSwitch
    	@change="toggleGroup"
    	:value="group.enabled"
    	:disabled="group.required"/>
    
    <GdprGuard v-for="g in guards">
    	<!-- [...] -->
    </GdprGuard>
</GdprGroup>
```

<u>Props</u>

| props     | Type                                                         | Description                                                  | Required           | Default |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------ | ------- |
| group     | [`GdprGuardGroupRaw`](https://voltra.github.io/gdpr-guard/interfaces/gdprguardgroupraw.html) | The group to manage                                          | :heavy_check_mark: | :x:     |
| recursive | `bool`                                                       | Whether or not the component tree should handle sub-groups itself | :x:                | `true`  |



<u>Slot scope</u>

| Slot props   | Type                                                         | Description                                                 |
| ------------ | ------------------------------------------------------------ | ----------------------------------------------------------- |
| group        | [`GdprGuardGroupRaw`](https://voltra.github.io/gdpr-guard/interfaces/gdprguardgroupraw.html) | allows access to the group's state (e.g. toggle all)        |
| guards       | [`GdprGuardRaw[]`](https://voltra.github.io/gdpr-guard/interfaces/gdprguardraw.html) | access the group's guards and sub-groups                    |
| toggleGroup  | `() => void`                                                 | toggle the group state and set every state to its new value |
| enableGroup  | `() => void`                                                 | enable every guards and sub-groups                          |
| disableGroup | `() => void`                                                 | disable every guards and sub-groups                         |
| manager      | [`GdprManagerRaw`](https://voltra.github.io/gdpr-guard/classes/gdprmanagerraw.html) | allows access to the manager's state                        |