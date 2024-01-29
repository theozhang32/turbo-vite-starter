import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
type Color = string

export const defaultUnocssPresets = [
  presetUno(),
  presetAttributify({
    prefix: 'un-',
    prefixedOnly: true,
  }),
]

/**
 * 调色板
 * 理想情况下所有颜色定义都引用这里的定义
 */
export const colorPalett: { [key: string]: Color } = {}
