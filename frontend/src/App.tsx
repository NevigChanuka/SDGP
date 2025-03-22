import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import GrammarCheckerPage from "./pages/GrammerChecker.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grammar-checker" element={<GrammarCheckerPage />} />
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
