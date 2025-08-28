import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import Sales from './components/Sales.jsx'
import Business from './components/Business.jsx'
import NewSales from './components/NewSales.jsx'
import Footer from './components/Footer.jsx'

function App() {
return (
    <div className="App">
     <Header />
     <Hero />
     <About />
     <Features />
     <Sales />
     <Business />
     <NewSales />
     <Footer />
    </div>
  );  
}

export default App
