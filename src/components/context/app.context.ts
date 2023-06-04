import { createContext } from "react";
import useWords from "../../hooks/useWords";

export type ContextStructure = {
  wordsContext: ReturnType<typeof useWords>;
};

export const AppContext = createContext<ContextStructure>(
  {} as ContextStructure
);
