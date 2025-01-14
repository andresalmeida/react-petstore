// import React, { useState, useEffect } from "react";
// import { getPetsByStatus } from "../services/api";

// const PetList = () => {
//   const [status, setStatus] = useState("available");
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     getPetsByStatus(status).then(setPets);
//   }, [status]);

//   return (
//     <div>
//       <h2>Lista de Mascotas</h2>
//       <label>Status:</label>
//       <select value={status} onChange={(e) => setStatus(e.target.value)}>
//         <option value="available">Disponible</option>
//         <option value="pending">Pendiente</option>
//         <option value="sold">Vendido</option>
//       </select>
//       <ul>
//         {pets.map((pet) => (
//           <li key={pet.id}>
//             {pet.name} (ID: {pet.id})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PetList;

// CODIGO VERSION 2

// import React, { useState, useEffect } from "react";
// import { getPetsByStatus } from "../services/api";

// const PetList = () => {
//   const [status, setStatus] = useState("available");
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     getPetsByStatus(status).then(setPets);
//   }, [status]);

//   return (
//     <div>
//       <h2>Lista de Mascotas</h2>
//       <label>Status:</label>
//       <select value={status} onChange={(e) => setStatus(e.target.value)}>
//         <option value="available">Disponible</option>
//         <option value="pending">Pendiente</option>
//         <option value="sold">Vendido</option>
//       </select>
//       <ul>
//         {pets.map((pet) => (
//           <li key={pet.id}>
//             <h3>{pet.name} (ID: {pet.id})</h3>
//             {/* Mostrar la foto si está disponible */}
//             {pet.photoUrls && pet.photoUrls.length > 0 ? (
//               <img
//                 src={pet.photoUrls[0]} // Usa la primera URL de foto de la mascota
//                 alt={pet.name}
//                 style={{ width: '200px' }}
//               />
//             ) : (
//               <p>No photo available</p> // Mensaje si no hay foto
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PetList;

// VERSION 2

import React, { useState, useEffect } from "react";
import { getPetsByStatus } from "../services/api";

const PetList = () => {
  const [status, setStatus] = useState("available");
  const [pets, setPets] = useState([]);

//   useEffect(() => {
//     getPetsByStatus(status).then(setPets);
//   }, [status]);

useEffect(() => {
    setPets([]); // Limpia la lista actual antes de cargar nuevos datos
    getPetsByStatus(status).then((data) => {
      setPets(data);
    }).catch((error) => {
      console.error("Error al obtener mascotas:", error);
    });
  }, [status]);
  

  return (
    <div className="pet-list-container bg-pink-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">Lista de Mascotas</h2>

      {/* Selector de estado */}
      <div className="mb-6">
        <label className="block text-pink-700 font-medium mb-2">Estado:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
        >
          <option value="available">Disponible</option>
          <option value="pending">Pendiente</option>
          <option value="sold">Vendido</option>
        </select>
      </div>

      {/* Lista de mascotas */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <li
            key={pet.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center border border-pink-200"
          >
            <h3 className="text-lg font-semibold text-pink-700 mb-2">
              {pet.name} (ID: {pet.id})
            </h3>
            {/* Imagen de la mascota */}
            {pet.photoUrls && pet.photoUrls.length > 0 ? (
              <img
                src={pet.photoUrls[0]}
                alt={pet.name}
                className="w-40 h-40 object-cover rounded-lg mb-4"
              />
            ) : (
              <p className="text-pink-500 italic mb-4">No hay foto disponible</p>
            )}
            <p className="text-gray-500 text-sm">Estado: {status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;

