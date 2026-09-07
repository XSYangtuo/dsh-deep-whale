import { installSettingsSection, settingsNamespace } from "@deepseek-ai/dsh-settings";
import z from "@deepseek-ai/schemastery";
//#region src/index.ts
/** Settings namespace owned by this skin; mirrors the composition row id. */
const SKIN_SETTINGS_NAMESPACE = settingsNamespace("ui-skin-maid-atelier");
/** Namespace schema: which whale-girl figures the backdrop stage shows. */
const SKIN_SETTINGS_SCHEMA = z.object({ characterMode: z.union([
	z.const("both"),
	z.const("big"),
	z.const("small")
]).default("both") });
/** Provides no host-side behavior beyond the settings-namespace registration. */
function apply(ctx, config = {}) {
	installSettingsSection(ctx, SKIN_SETTINGS_NAMESPACE, SKIN_SETTINGS_SCHEMA, config, {
		setSource() {},
		onChange() {}
	});
}
//#endregion
export { SKIN_SETTINGS_NAMESPACE, SKIN_SETTINGS_SCHEMA, apply };
