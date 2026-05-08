import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import Title from './Components/title/title';
import SubTitle from './Components/title/SubTitle/SubTitle';
function App() {

  

  return (
    <div>
      <Title texto="o rato roeu o titulo da pagina"/>
     <SubTitle texto="Minha pagina "/>
     <SubTitle bella="bacana" texto="Minha pagina 2"/>
      
    </div>
  );
}

export default App
