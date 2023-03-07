import { EToggle } from "./profile";
import Router from "../../utils/core/router";

export const toggleHandler = (router: typeof Router): keyof typeof EToggle => {
  switch (router.query.settings) {
    case EToggle.changeData :
      return EToggle.changeData

    case EToggle.password:
      return EToggle.password

    default:
      return EToggle.default
  }
}
