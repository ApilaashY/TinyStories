import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoryDetail from "./Story/Story.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/stories/:storyId/episode/:episode"
            element={<StoryDetail />}
          />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
