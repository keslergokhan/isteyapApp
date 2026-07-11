import {color} from "@/shread/theme/color"
import {typography} from "@/shread/theme/typography"
import {spacing} from "@/shread/theme/spacing";


const theme = {
    color,
    typography,
    spacing
}

type theme = typeof theme;
type colors = typeof color;
type typographys = typeof typography;
type spacings = typeof spacing;
export default theme;
export {colors,typographys,spacings}