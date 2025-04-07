import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout.tsx";
import NotFound from "./pages/NotFound.tsx";
import WiseList from "./pages/WiseList.tsx";
import Home from "./pages/Home.tsx";
import BookProvider from "./contexts/BookProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BookProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="wiselist" element={<WiseList />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
  </StrictMode>
);
