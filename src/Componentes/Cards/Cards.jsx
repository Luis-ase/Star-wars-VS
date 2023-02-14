import React from "react";
import Styles from "../../styles/styles";
import Card from "../Card/Card";




 const Cards = ()=> {
    return (
      <div className={` grid gap-0 h-[600px] w-[700px] grid-cols-3 grid-rows-3 `}>
      
      <div className=" colum1 p-1 m-auto flex flex-col" >
        <Card/>
      </div>
      <div className=" colum2 flex justify-center align-center" >
        <img  alt={"versus"}
        src={"https://static.vecteezy.com/system/resources/thumbnails/003/484/555/small/versus-background-logo-vs-letters-for-sports-and-fight-competition-free-vector.jpg"}
        />
      </div>
      <div className="  p-1 m-auto flex  justify-center flex-col colum3" >
        <Card/>
      </div>
        
      </div>
    );
  }
  

  export default Cards;