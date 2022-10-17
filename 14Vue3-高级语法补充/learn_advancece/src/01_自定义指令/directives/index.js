import directiveFocus from "./focus"
import directiveUnit from "./unit"
import directiveFtime from "./ftime"

export default function useDirectivs(app) {
  directiveFocus(app)
  directiveUnit(app)
  directiveFtime(app)
}