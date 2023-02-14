import React, { useEffect, useState } from "react";
import "./App.css"
import Cards from "./Componentes/Cards/Cards";
import List from "./Componentes/List/List";
import NavBar from "./Componentes/NavBar/NavBar";


export default function App() {
  
  const [pjotas,setPjotas]= useState([])
// para no cambiar el state de pjotas 
  const [json , setJson] = useState({
    allPersonajes : {}
  })
  
  const Personajes = async() =>{
    const data = await fetch("https://akabab.github.io/starwars-api/api/all.json").then(r => r.json())
    setPjotas(data)
  }

  
  useEffect(()=>{
      Personajes()
  },[])

  const TodoslosPjtas = () =>{
    

  }
  const limpiarLista = () =>{
    

  }
  

  return (
    <div className="bg-url-Space min-h-screen bg-no-repeat bg-cover">
      <NavBar/>
      <Cards/>
      <List TodoslosPjtas={TodoslosPjtas} personajesAll={json.allPersonajes}/>
    </div>
  )
}
