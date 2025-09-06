// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Header from "./Header";
import App from "./App";
import BakemonoLands from "./BakemonoLands";
import FAQ from "./FAQ";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/bakemonolands" element={<BakemonoLands />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
