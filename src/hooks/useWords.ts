import { useCallback, useEffect, useReducer } from "react";
import {
  WordsState,
  wordsReducer,
} from "../components/reducer/words/words.reducer";
import { VenecoWord } from "../models/types";
import * as ac from "../components/reducer/words/words.actions.creator";
import { words } from "../mocks/veneco.words";

export default function useWords() {
  const initialState: WordsState = {
    words: [],
    word: { word: "", meaning: "" },
  };

  const [wordsState, dispatch] = useReducer(wordsReducer, initialState);

  const getRandomWord = (words: VenecoWord[]) =>
    words[Math.floor(Math.random() * words.length)];

  const handleLoad = useCallback(() => {
    dispatch(ac.loadWordAction(words));
  }, []);

  const handleLoadOne = useCallback(() => {
    dispatch(ac.loadOneWordAction(getRandomWord(words)));
  }, []);

  useEffect(() => {
    handleLoad();
    handleLoadOne();
  }, [handleLoad, handleLoadOne]);

  return {
    words: wordsState.words,
    word: wordsState.word,
    handleLoadOne,
  };
}
