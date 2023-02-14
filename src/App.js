import React, { useEffect, useState } from "react";
import "./App.css"
import Cards from "./Componentes/Cards/Cards";
import List from "./Componentes/List/List";
import NavBar from "./Componentes/NavBar/NavBar";
import Styles from "./styles/styles";


export default function App() {
  
  const [pjotas,setPjotas]= useState([])
// para no cambiar el state de pjotas 
  const [json , setJson] = useState([])
  
  const Personajes = async() =>{
    const data = await fetch("https://akabab.github.io/starwars-api/api/all.json").then(r => r.json())
    setPjotas(data)
  }
 
  const TodoslosPjtas = () =>{
    if(json.length ===0){
      setJson(pjotas)
    }else{
      setJson([])
    }
  }
  useEffect(()=>{
      Personajes()
  },[])

 

  return (
    <div className="bg-url-Space min-h-screen min-w-screen bg-no-repeat bg-cover">
      <NavBar/>
      <div className={` p-1 m-1 ${Styles.flexCenter} ${Styles.padding}`}>
      <Cards/>
      </div>
      <div className={`${Styles.flexCenter} ${Styles.padding}`}>

      <List TodoslosPjtas={TodoslosPjtas} personajesAll={json} />
      </div>
    </div>
  )
}
