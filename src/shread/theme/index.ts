import {colors} from "@/shread/theme/color"
import {typography} from "@/shread/theme/typography"
import {spacing} from "@/shread/theme/spacing.js";


const theme = {
    colors,
    typography,
    spacing
}

type theme = typeof theme;
type colors = typeof colors;
type typography = typeof typography;
type spacing = typeof spacing;
export default theme;
export {colors,typography,spacing}