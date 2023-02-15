import React, { useEffect, useState } from "react";
import "./App.css"
import Cards from "./Componentes/Cards/Cards";
import List from "./Componentes/List/List";
import NavBar from "./Componentes/NavBar/NavBar";
import Styles from "./styles/styles";


export default function App() {
  
  const [pjotas,setPjotas]= useState([])
// para no cambiar el state de pjotas 
  const [json , setJson] = useState({
    allPersonajes:[],
    PersonajeDer:{},
    PersonajeIzq:{},
  })
  
  const Personajes = async() =>{
    const data = await fetch("https://akabab.github.io/starwars-api/api/all.json").then(r => r.json())
    setPjotas(data)
  }
 
  const TodoslosPjtas = () =>{
    if(json.allPersonajes.length === 0){
      setJson({...json,allPersonajes: pjotas})
    }else{
      setJson({...json,allPersonajes:[]})
    }
  }
  const findPersonaje = (nombre,lado) =>{
    const onePersonaje = pjotas.find((e)=>e.name === nombre)

    if( onePersonaje === json.PersonajeDer || onePersonaje === json.PersonajeIzq ){
      alert("Ese Personaje ya esta bro")
      return
    }

    if(lado === "Izq"){
      setJson({...json, PersonajeIzq:onePersonaje})
    }
    if(lado ==="Der"){
      setJson({...json, PersonajeDer:onePersonaje})
    }
  }
  const Random = (lado) =>{
   const  numberRamdon=(min, max)=> {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min ) + min);
    }
    const indexAbuscar = numberRamdon(0,87)
    const onePersonaje = pjotas.find((e)=>e.id === indexAbuscar)
    if( onePersonaje === json.PersonajeDer || onePersonaje === json.PersonajeIzq ){
      alert("Ese Personaje ya esta bro")
      return
    }

    if(lado === "Izq"){
      setJson({...json, PersonajeIzq:onePersonaje})
    }
    if(lado ==="Der"){
      setJson({...json, PersonajeDer:onePersonaje})
    }
  }
  
  useEffect(()=>{
      Personajes()
  },[])

 console.log(json.PersonajeDer)

  return (
    <div className="bg-url-Space min-h-screen min-w-screen  bg-no-repeat bg-cover">
      <div className={`${Styles.flexStart}`}>
      <NavBar findPersonaje={findPersonaje}/>
      </div>
      <div className={` p-1 m-1 ${Styles.flexCenter} ${Styles.padding}`}>
      <Cards personajes={json} Random={Random}/>
      </div>
      <div className={`${Styles.flexCenter} ${Styles.padding}`}>

      <List TodoslosPjtas={TodoslosPjtas} personajesAll={json.allPersonajes} />
      </div>
    </div>
  )
}
