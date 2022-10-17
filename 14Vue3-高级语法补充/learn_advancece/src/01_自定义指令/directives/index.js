import directiveFocus from "./focus"
import directiveUnit from "./unit"

export default function useDirectivs(app) {
  directiveFocus(app)
  directiveUnit(app)
}