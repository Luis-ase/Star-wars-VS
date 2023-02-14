import React, { useEffect, useState } from "react";
import "./App.css"


export default function App() {
  
  const [pjotas,setPjotas]= useState([])
  
  
  const Personajes = async() =>{
    const data = await fetch("https://akabab.github.io/starwars-api/api/all.json").then(r => r.json())
    setPjotas(data)
  }

  
  useEffect(()=>{
      Personajes()
  },[])
  

  return (
    <div className="bg-url-Space min-h-screen bg-no-repeat bg-cover">
      <div className="py-1">
        <h1 className="text-3xl text-white font-bold underline" >
        Hello world!
        </h1>
      </div>
    </div>
  )
}
