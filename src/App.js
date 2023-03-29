import React from "react";
import "./App.module.scss";
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import GlobalVariablesContextProvider from "./components/GlobalVariablesContextProvider";
function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalVariablesContextProvider>
          <BaseLayout />
        </GlobalVariablesContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
