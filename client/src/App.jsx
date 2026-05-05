import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import LevelPage from "./pages/LevelPage";
import LevelOnePage from "./pages/LevelOnePage";
import ResultPage from "./pages/ResultPage";
import LevelTwoPage from "./pages/LevelTwoPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lernen" element={<LearnPage />} />
        <Route path="/level" element={<LevelPage />} />
        <Route path="/level/1" element={<LevelOnePage />} />
        <Route path="/ergebnis" element={<ResultPage />} />
        <Route path="/level/2" element={<LevelTwoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;