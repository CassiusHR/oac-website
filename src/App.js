import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import MainSlider from './components/MainSlider'
import MainContainer from './components/MainContainer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainSlider/>
      <MainContainer/>
    </div>
  );
}

export default App;
