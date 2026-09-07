/**
 * Host loader entry for the browser-only skin plugin. The skin itself is
 * presentation-only: this half never consumes the resolved value. It only
 * registers the skin's settings namespace so the web GUI's
 * 设置 → 插件 → 插件配置 page dispatches the skin's card (the client half
 * renders and applies the choice, persisted through the settings document).
 */
import type { Context } from '@deepseek-ai/cordis'
import { installSettingsSection, settingsNamespace } from '@deepseek-ai/dsh-settings'
import z from '@deepseek-ai/schemastery'

/** Which whale-girl figures the backdrop stage shows (settings choice). */
export type CharacterMode = 'both' | 'big' | 'small'

/** Settings namespace owned by this skin; mirrors the composition row id. */
export const SKIN_SETTINGS_NAMESPACE = settingsNamespace('ui-skin-maid-atelier')

/** Namespace schema: which whale-girl figures the backdrop stage shows. */
export const SKIN_SETTINGS_SCHEMA = z.object({
  characterMode: z.union([
    z.const('both'),
    z.const('big'),
    z.const('small'),
  ]).default('both'),
})

/** Provides no host-side behavior beyond the settings-namespace registration. */
export function apply(
  ctx: Context,
  config: Partial<{ characterMode: CharacterMode }> = {},
): void {
  installSettingsSection(ctx, SKIN_SETTINGS_NAMESPACE, SKIN_SETTINGS_SCHEMA, config, {
    setSource() {},
    onChange() {},
  })
}