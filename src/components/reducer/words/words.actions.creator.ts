import { VenecoWord } from "../../../models/types";
import { actionTypes } from "./words.actions.types";

export type WordAction = {
  type: string;
  payload?: VenecoWord[] | VenecoWord;
};

export function loadWordAction(payload: VenecoWord[]): WordAction {
  return {
    type: actionTypes.load,
    payload,
  };
}

export function loadOneWordAction(payload: VenecoWord): WordAction {
  return {
    type: actionTypes.loadOne,
    payload,
  };
}
