# In Depth

This library (and the gdpr-guard ecosystem in general) is written to follow the "traditional" GDPR flow:

- A banner is shown (if it wasn't already)
- From that banner we can have multiple options
  - Reject everything
  - Allow everything
  - Allow a default selection
  - Edit the current selection (usually in a modal)
- When editing the selection we can
  - Toggle groups of items
  - Toggle specific items
  - Allow everything
  - Reject everything
  - Save
  - Cancel, which can either
    1. Close everything and save the default settings
    2. Close the editing context (usually a modal) and keep the banner opened

As such this library helps with most of this and leaves the rest (mostly the UI) up to you.

## Attach event listeners to the manager's event hub

Because the manager is loaded asynchronously, there's no way for you to set your listeners in one place and leave it alone.

One thing you can do is listen to the `hotswap` event on the manager wrapper and add your events there:

```javascript
export default {
	mounted() {
		this.$gdpr.$on("hotswap", () => {
			const events = this.$gdpr.getEventsHub();

			events.onEnable("_ga", () => {
				// Load Google Analytics stuff
			});

			// Add more listeners
		});
	}
}
```

## Recommended components structure

* `<GdprBanner/>` which is only displayed if `this.$gdpr.manager.bannerWasShown` is false
* `<GdprModal/>` which can be opened from `<GdprBanner/>` and displays your whole `<GdprManager/>`, `<GdprGroup/>`
and `<GdprGuard/>` structure for users to pick what they want enabled
* `<GdprOpener/>` which can be used to re-open the `<GdprModal/>` at any point
