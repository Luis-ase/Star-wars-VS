import React, { useState } from "react";

function Inputs() {
    const [datainput, setDatainput] = useState("")
    const handle = (e)=>{
        e.preventDefault();
        setDatainput(e.target.value)
    }

    return (
        <>
        
        <input id="name" type="text" name="name" value={datainput} onChange={(e)=>handle(e)}/>
        <button  className="bg-sky-800 text-white p-2 rounded-md m-1">Enviar</button>
        </>
    );
}

export default Inputs;