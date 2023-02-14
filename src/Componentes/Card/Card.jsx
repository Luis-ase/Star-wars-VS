import React from "react";
import Styles from "../../styles/styles";



 const Card = ()=> {
    return (
      <div className={`flex justify-center text-white flex-col h-50  w-40 ${Styles.paddingY}`}>
        <button className={`py-4`}>Ramdon</button>
        <img 
        className="h-30 w-auto" 
        src="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg" alt="Luke Skywalker"/>
        <h3 className={`text-center text-xl `}>Luke Skywalker</h3>
        <p className={`text-center text-sm `}>human</p>
      </div>
    );
  }
  

  export default Card;