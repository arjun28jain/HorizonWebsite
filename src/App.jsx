import React from 'react'
import './App.css'
import CenterArea from './CenterArea';
import LowerArea from './LowerArea';
import Herofooter from './Herofooter';
import Events from './Events';
import FrontArea from './FrontArea';

const App = () => {
  return (
    <>
      <FrontArea/>
      <CenterArea/>
      <LowerArea/>
      <Herofooter/>
      <Events/>
    </>
  )
}

export default App