import { useContext } from "react";
import { AppContext } from "../context/app.context";

export default function Words() {
  const {
    wordsContext: { word, handleLoadOne },
  } = useContext(AppContext);
  console.log(word);

  return (
    <div>
      <h2>Palabra: {word.word}</h2>
      <p>Significado: {word.meaning}</p>
      <button onClick={handleLoadOne}>Cambiar Palabra</button>
    </div>
  );
}
