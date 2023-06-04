import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import "./index.css";
import { AppContextProvider } from "./components/context/app.context.provider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
