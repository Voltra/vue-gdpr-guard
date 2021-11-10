import type { GdprManager, GdprManagerRaw, GdprStorage } from "gdpr-guard";
import Vue from "vue";
import type { OptionalGdprTarget, GdprTarget } from "../helpers"

export declare class ManagerWrapper extends Vue {
	constructor(protected manager: GdprManager);

	/**
	 * Swap the wrapped manager on the fly
	 */
	hotswap(manager: GdprManager): GdprManager | null;

	/**
	 * Emit a wrapper event
	 * @ignore
	 * @param event Event name
	 * @param args Arguments to pass
	 */
	protected $emitEvent(event: string, ...args: unknown[]): this;

	raw(): GdprManagerRaw;

	/**
	 * @alias {ManagerWrapper#raw}
	 */
	json(): GdprManagerRaw;

	toString(): string;

	/**
	 * Wrap and delegate to a {@link GdprManager} method
	 */
	protected _wrap(
		method: keyof GdprManager,
		target?: OptionalGdprTarget,
		...args: unknown[]
	): this;

	/**
	 * Enable the given target (or the entire manager if non given)
	 */
	enable(target?: OptionalGdprTarget): this;

	/**
	 * Disable the given target (or the entire manager if non given)
	 */
	disable(target?: OptionalGdprTarget): this;

	/**
	 * Toggle the given target (or the entire manager if non given)
	 */
	toggle(target?: OptionalGdprTarget): this;

	/**
	 * Disable guards that use the given storage (scoped to the given target, if provided)
	 */
	disableForStorage(storage: GdprStorage, target?: OptionalGdprTarget): this;

	/**
	 * Enable guards that use the given storage (scoped to the given target, if provided)
	 */
	enableForStorage(storage: GdprStorage, target?: OptionalGdprTarget): this;

	/**
	 * Toggle guards that use the given storage (scoped to the given target, if provided)
	 */
	toggleForStorage(storage: GdprStorage, target?: OptionalGdprTarget): this;

	/**
	 * Determine whether or not the guard is enabled (or the entire manager if none provided)
	 */
	isEnabled(
		target?: OptionalGdprTarget
	): ReturnType<GdprManager["isEnabled"]>;

	/**
	 * Determine whether or not a group exists with the given {@link groupName}
	 */
	hasGroup(groupName: GdprTarget): ReturnType<GdprManager["hasGroup"]>;

	/**
	 * Determine whether or not a guard exists with the given {@link guardName}
	 */
	hasGuard(guardName: GdprTarget): ReturnType<GdprManager["hasGuard"]>;

	/**
	 * Retrieve the group that has the given {@link groupName}
	 */
	getGroup(groupName: GdprTarget): ReturnType<GdprManager["getGroup"]>;

	/**
	 * Retrieve the group that has the given {@link guardName}
	 */
	getGuard(guardName: GdprTarget): ReturnType<GdprManager["getGuard"]>;
}
