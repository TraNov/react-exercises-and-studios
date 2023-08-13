import React from 'react';
import './App.css';
import HobbyIntroduction from './components/Introduction';
import MyProjects from './components/Projects';
import ShoeButton from './components/ShoeButton';


function App(){
  return(
    <>
      <HobbyIntroduction />
      <ShoeButton />
      <MyProjects />
    </>
  );
}
export default App;