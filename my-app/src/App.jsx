import { useState } from 'react'
import Home from './components/Home'
import "./components/Home.css"
import heroImage from "./assets/hero.png";

function App() {
  return (
    <>
      <Home />
      <img src={heroImage} alt="hero" />
    </>
  )
}

export default App