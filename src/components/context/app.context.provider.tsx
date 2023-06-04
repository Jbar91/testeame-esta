import useWords from "../../hooks/useWords";
import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    wordsContext: useWords(),
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
