import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import GrammarCheckerPage from "./pages/GrammerChecker.tsx";
import Feedback from "./pages/Feedback.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grammar-checker" element={<GrammarCheckerPage />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
