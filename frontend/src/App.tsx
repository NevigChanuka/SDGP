import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import GrammarChecker from './Pages/GrammarChecker';
import SimilarWords from './Pages/SimilarWords';
import Feedback from './Pages/Feedback';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

const App:React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/grammar-checker" element={<GrammarChecker/>} />
        <Route path="/similar" element={<SimilarWords/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} /> 
      
      </Routes>
    </Router>
  );
};

export default App;
