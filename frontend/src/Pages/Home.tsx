import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import About from '../components/About';


const Home:React.FC = () => {

  return (
   <>
      <NavBar /> 
      <About />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
      </>


      
  )
}

export default Home;
