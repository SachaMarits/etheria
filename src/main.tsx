import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { OpeningContextProvider } from "./contexts/useOpening";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OpeningContextProvider>
      <App />
    </OpeningContextProvider>
  </React.StrictMode>
);
