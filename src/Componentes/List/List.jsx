import React from "react";




const List = () => {


  return (
    <div className="text-white">
      <button className="bg-sky-800 text-white p-2 rounded-md m-1" >Todos los Personajes</button>
      <button className="bg-sky-800 text-white p-2 rounded-md m-1">Limpiar lista</button>
      
      <table class="table-fixed">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Genero</th>
            <th>Tierra natal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Luke Skywalker</td>
            <td>hombre</td>
            <td>tatooine</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default List;