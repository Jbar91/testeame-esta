import { VenecoWord } from "../../../models/types";
import { WordAction } from "./words.actions.creator";
import { actionTypes } from "./words.actions.types";

export type WordsState = {
  words: VenecoWord[];
  word: VenecoWord;
};

export const wordsReducer = (state: WordsState, action: WordAction) => {
  let payload: VenecoWord[] | VenecoWord;

  switch (action.type) {
    case actionTypes.load:
      payload = action.payload as VenecoWord[];
      return {
        ...state,
        words: payload,
      };

    case actionTypes.loadOne:
      payload = action.payload as VenecoWord;
      return {
        ...state,
        word: payload,
      };

    default:
      return { ...state };
  }
};
