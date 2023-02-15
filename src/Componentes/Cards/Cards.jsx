import React from "react";
import Styles from "../../styles/styles";
import Card from "../Card/Card";


 const Cards = ({personajes,Random})=> {
  
    return (
      <div className={`grid gap-0 h-[500px] w-[700px] grid-cols-3 grid-rows-3   `}>
      <div className=" colum1 p-1 m-auto flex flex-col  items-center" >
        <Card pjta={personajes.PersonajeIzq? personajes.PersonajeIzq: false} RandomPjt={Random} lado={"Izq"}/>
      </div>
      <div className=" colum2 flex justify-center  items-center" >
        <p className="text-white text-9xl">VS</p>
      </div>  
      <div className="  p-1 m-auto flex  justify-center flex-col colum3  items-center" >
        <Card pjta={personajes.PersonajeDer? personajes.PersonajeDer: false} RandomPjt={Random} lado={"Der"} />
      </div>
      </div>
    );
  }
  

  export default Cards;