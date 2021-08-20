
import { useState } from "react";
import Gifts from "./Gifts";
import Buscador from './Buscador';
import '../styles/index.css';
const App=()=> {
  const [busqueda,setBusqueda]= useState(['']);

  return (
    <>
      <h1>Buscador de Gif</h1>

      <hr/>
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda}/>
      {
          busqueda.map((item,i)=>{
            return <Gifts key={item +i} item={item}/>
          })
      }

    </>
  );
}



export default App;
