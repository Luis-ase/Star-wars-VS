import React from "react";




const List = ({ TodoslosPjtas, personajesAll }) => {
  return (
    <div className="">
      {personajesAll.length === 0?
      <>
      <button
        onClick={TodoslosPjtas}
        className="bg-sky-800  p-2 rounded-md m-1" >
        Todos los personajes
      </button>
      
      </>:
      <button
        onClick={TodoslosPjtas}
        className="bg-sky-800  p-2 rounded-md m-1" >
        Vaciar lista
      </button>

      }

      <select>
        {personajesAll.length === 0 ? 
        <>
        <option className="text-black" value="">Lista vacias</option>
        </> :
        <>
        { personajesAll?.map((e, index) => {
        return (
          <>
          <option  className="text-black" key={`${index}`}>
            <span>
              {e.name}
            </span>
            </option>
          </>
        )
      })}
        </> 
        }
      </select>
      {/* <div >

        {personajesAll.length === 0 ? 
        <>
        </> :
        <>
        { personajesAll?.map((e, index) => {
        return (
          <>
          <p  className="text-black" key={`${index}`}>{e.name}</p>
          </>
        )
      })}
        </> 
        }
      </div> */}
      
      

    </div>
  );
}


export default List;