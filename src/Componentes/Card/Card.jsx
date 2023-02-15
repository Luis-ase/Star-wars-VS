import React from "react";
import Styles from "../../styles/styles";



 const Card = ({pjta, RandomPjt,lado})=> {
    return (
      <div className={`${Styles.flexCenter} text-white flex-col h-50  w-40 p-2 m-2`}>
        <button className="my-4 bg-sky-800 text-white p-2 rounded-md m-1" onClick={()=>RandomPjt(lado)}>Random</button>
        <img 
        className="h-30 w-auto" 
        src={pjta ? pjta.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfjX1QD5aG8-fZ3aoozlBqM64sly3h8yAmg&usqp=CAU"} alt={pjta? pjta.name: "selecione un personaje"}/>
        <h3 className={`text-center text-xl `}>{pjta? pjta.name: "selecione un personaje"}</h3>
        <p className={`text-center text-sm `}>{pjta? pjta.species: "selecione un personaje"}</p>
      </div>
    );
  }
  

  export default Card;