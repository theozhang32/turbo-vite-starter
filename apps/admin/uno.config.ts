import { defaultUnocssPresets, colorPalett } from '@repo/unocss-config'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: defaultUnocssPresets,
  theme: {
    colors: {
      ...colorPalett,
    },
  }
})
