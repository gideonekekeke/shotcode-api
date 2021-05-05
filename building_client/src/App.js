import React from 'react'
import logo from './logo.svg';
import './App.css';
import CustomizedSlider from '../src/SlideComp/SlideComp'
import Nav from './Navpage/Nav';
import Footerpage from './Footerpage/Footerpage';
import ProjectBody from '../src/Components/ProjectBody/ProjectBody'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'




function App() {
  return (
    <>

      <Nav />
      <ProjectBody />
      <Footerpage />




    </>
  );
}

export default App;
