import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import AOS from "aos";
import "aos/dist/aos.css";



function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;