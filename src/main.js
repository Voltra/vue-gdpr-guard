import { ManagerWrapperFactory } from "./wrapper";
import { VueSavior } from "./savior";
import { gdprMixin } from "./mixins/gdpr";
import GdprManager from "./components/GdprManager.vue";
import GdprGroup from "./components/GdprGroup.vue";
import GdprGuard from "./components/GdprGuard.vue";
import { GdprStorage, GdprManager as GManager } from "gdpr-guard";

const assertCorrectOptions = options => {
	const fail = msg => {
		throw new Error(`[VueGdprGuard] ${msg}`);
	};

	if(typeof options !== "object")
	{fail("Invalid options (must be an object)");}

	if(!options)
	{fail("No options were provided");}

	if(!("factory" in options))
	{fail("Missing `factory` option");}

	if(typeof options.factory !== "function")
	{fail("`factory` must be a function (that returns a GdprManager)");}

	if(!("savior" in options))
	{fail("Missing `savior` option");}

	if(typeof options.savior !== "object" || !options.savior)
	{fail("`savior` must be an instance of GdprSavior");}
};

const VueGdprGuard = {
	/**
     * @type {import("vue/types/plugin").PluginFunction}
	 * @param {{
	 *	factory: import("gdpr-guard/dist/serde/GdprSavior").GdprManagerFactory,
	 *	savior: import("gdpr-guard/dist/serde/GdprSavior").GdprSavior
	 * }} options
     */
	install(Vue, options){
		assertCorrectOptions(options);
		const {
			factory,
			savior,
		} = options;

		const vueSavior = new VueSavior(Vue, savior);
		const ManagerWrapper = ManagerWrapperFactory(Vue);
       
		const desc = val => {return {
			value: val,
			configurable: false,
			enumerable: true,
			writable: false,
		};};

		const installTargets = [
			Vue,
			Vue.prototype,
		];

		const install = ({ key, value }) => {
			installTargets
				.forEach(target => Object.defineProperty(target, `$${key}`, value));
		};


		const dummyManager = GManager.create([]);
		const wrapper = new ManagerWrapper(dummyManager);

		[
			{
				key: "GdprStorage",
				value: desc(GdprStorage),
			},
			{
				key: "gdpr_savior",
				value: desc(vueSavior),
			},
			{
				key: "gdpr",
				value: desc(wrapper),
			},
		].forEach(install);

		(async () => {
			const manager = await vueSavior.restoreOrCreate(factory);
			Vue.$gdpr.hotswap(manager);
		})();
	},
};

export {
	VueGdprGuard,
	gdprMixin,

	GdprManager,
	GdprGroup,
	GdprGuard,
};
