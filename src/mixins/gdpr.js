import GdprManager from "../components/GdprManager";
import GdprGroup from "../components/GdprGroup";
import GdprGuard from "../components/GdprGuard";
import VueTypes from "vue-types";

export const gdprMixin = {
	components: {
		GdprManager,
		GdprGroup,
		GdprGuard,
	},
	props: {
		opened: VueTypes.bool.def(false),
	},
	methods: {
		/**
		 * Enable all guards
		 */
		enableAll() {
			return this.$gdpr.enable();
		},
		/**
		 * Disable all guards
		 */
		disableAll() {
			return this.$gdpr.disable();
		},
		/**
		 * Close the GDPR preferences
		 */
		close() {
			this.$emit("close");
			this.$gdpr.manager.closeBanner();
		},
		/**
		 * Discard preferences modifications
		 * @returns {Promise<boolean>} Resolves if successfully discarded, rejects otherwise
		 */
		async discard() {
			const didStore = await this.$gdpr_savior.storeIfNotExists(this.$gdpr.raw());

			if (!didStore) {
				throw new Error("Failed to store GDPR preferences");
			} else {
				return didStore;
			}
		},
		/**
		 * Save preferences modifications
		 * @returns {Promise<boolean>} Resolves if successfully saved, rejects otherwise
		 */
		async save() {
			const didStore = await this.$gdpr_savior.store(this.$gdpr.raw());

			if (!didStore) {
				throw new Error("Failed to save GDPR preferences");
			} else {
				this.$gdpr.closeBanner();
				return didStore;
			}
		},
	},
};
