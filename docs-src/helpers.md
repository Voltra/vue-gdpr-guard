# Helpers

::: tip

The helpers exposed by this library are available both on the Vue instances and on the Vue object itself once the plugin is registered :

```javascript
Vue.myHelper /* [...] */
this.$myHelper /* [...] */
```

:::



| helper      | type                                                         | description                                                  |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| GdprStorage | [`enum GdprStorage`](https://voltra.github.io/gdpr-guard/enums/gdprstorage.html) | Enum that lists the storage locations available              |
| gdpr        | `ManagerWrapper extends Vue`                                 | Wrapper around a naked [GdprManager](https://voltra.github.io/gdpr-guard/classes/gdprmanager.html) that provides superpowers as well as an "event bus" interface |



## Storage

This plugin exposes `gdpr-guard`'s [GdprStorage](https://voltra.github.io/gdpr-guard/enums/gdprstorage.html) which allows you to perform conditionnal rendering within your templates if you ever wish to do so.



## Wrapper

It is a complete wrapper around the [GdprManager](https://voltra.github.io/gdpr-guard/classes/gdprmanager.html)  that you pass to the plugin. Its simpler interface is mainly for internal use purposes but it provides useful information such as knowing whether or not a guard is enabled.

The "target" are the unique name given to your guards.

| method            | arguments                                      | returns                                                      | description                                                  |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| raw               | :x:                                            | [`GdprManagerRaw`](https://voltra.github.io/gdpr-guard/interfaces/gdprmanagerraw.html) | Get the raw representation of the manager's state            |
| json              |                                                |                                                              | Alias for `ManagerWrapper#raw`                               |
| toString          | :x:                                            | `string`                                                     | The actual JSON string representation of the manager's state |
| disable           | `target: ?string = null`                       | `ManagerWrapper`                                             | Disable the target (or itself if no target is provided)      |
| enable            | `target: ?string = null`                       | `ManagerWrapper`                                             | Enable the target (or itself if no target is provided)       |
| isEnabled         | `name: string`                                 | `bool`                                                       | Determine whether or not a guard is enabled                  |
| hasGuard          | `guardName: string`                            | `bool`                                                       | Determine whether or not there's a guard with the given name in the manager's hierarchy |
| getGuard          | `guardName: string`                            | [`?GdprGuardRaw`](https://voltra.github.io/gdpr-guard/interfaces/gdprguardraw.html) | Retrieve a guard from the manager                            |
| hasGroup          | `groupName: string`                            | `bool`                                                       | Determine whether or not the manager has a specific group (as a "top level" group) |
| getGroup          | `groupName: string`                            | [`?GdprGuardGroupRaw`](https://voltra.github.io/gdpr-guard/interfaces/gdprguardgroupraw.html) | Retrieve a "top level" group                                 |
| disableForStorage | `storage: GdprStorage, target: ?string = null` | `ManagerWrapper`                                             | Disable guards for the given storage (starting from the specified target) |
| enableForStorage  | `storage: GdprStorage, target: ?string = null` | `ManagerWrapper`                                             | Enable guards for the given storage (starting from the specified target) |
| toggleForStorage  | `storage: GdprStorage, target: ?string = null` | `ManagerWrapper`                                             | Toggle guards for the given storage (starting from the specified target) |

