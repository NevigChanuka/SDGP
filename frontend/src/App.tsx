import "./App.css";
import Home from "./pages/Home.tsx";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import FAQ from "./components/FAQ.tsx";
import About from "./components/About.tsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
