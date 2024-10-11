import {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@design-system/tokens'
import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
})
