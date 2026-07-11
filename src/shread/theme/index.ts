import {color} from "@/shread/theme/color"
import {typography} from "@/shread/theme/typography"
import {spacing} from "@/shread/theme/spacing";
import {radius_} from "@/shread/theme/radius"


const theme = {
    color,
    typography,
    spacing
}

type theme = typeof theme;
type colors = typeof color;
type typographys = typeof typography;
type spacings = typeof spacing;
type radius = typeof radius_;
export default theme;
export {colors,typographys,spacings,radius}