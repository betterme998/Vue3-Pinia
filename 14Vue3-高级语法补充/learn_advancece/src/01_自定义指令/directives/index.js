import directiveFocus from "./focus"
import directiveUnit from "./unit"
import directiveFtime from "./ftime"
import directiveDtime from "./dtime"

export default function useDirectivs(app) {
  directiveFocus(app)
  directiveUnit(app)
  directiveFtime(app)
  directiveDtime(app)
}