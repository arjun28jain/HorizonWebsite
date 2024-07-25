import React from 'react'
import './App.css'
import CenterArea from './CenterArea';
import LowerArea from './LowerArea';
import Herofooter from './Herofooter';
import Events from './Events';
import FrontArea from './FrontArea';
import Team from './Team';
import Cards from './Cards';
import Form from './Form';


const App = () => {
  return (
    <>
    
      <FrontArea/>
      <CenterArea/>
      <LowerArea/>
      <Events/>
      <Team/>
      <Form/>
      <Herofooter/>
      <Cards/>
    </>
  )
}

export default App
