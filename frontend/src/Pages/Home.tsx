import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import About from '../components/About';
import Team from '../components/Team';
import { DisplayCardsDemo } from "../components/demo";


const Home:React.FC = () => {

  return (
    <div>
   <>
      <NavBar /> 
      <About />
      <div className="max-w-screen-xl mx-auto px-4"> 
        <Features />
        <HowItWorks />
        <DisplayCardsDemo/>
        <FAQ />
        <Team/>
      </div>
      <Footer />
      </>

    </div>


      
  )
}

export default Home;
