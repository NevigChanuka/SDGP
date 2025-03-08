import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import About from '../components/About';
import { DisplayCardsDemo } from "../components/demo";

const Home:React.FC = () => {

  return (
   <>
      <NavBar /> 
      <About />
      <div className="max-w-screen-xl mx-auto px-4"> 
        <Features />
        <HowItWorks />
        <DisplayCardsDemo/>
        <FAQ />
      </div>
      <Footer />
      </>


      
  )
}

export default Home;
