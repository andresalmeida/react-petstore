// import React, { useState } from "react";
// import { updatePet } from "../services/api";

// const UpdatePet = () => {
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [status, setStatus] = useState("available");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const pet = { id: parseInt(id), name, status };
//     const response = await updatePet(pet);
//     alert(`Mascota actualizada: ${response.name}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Actualizar Mascota</h2>
//       <label>ID:</label>
//       <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
//       <label>Nombre:</label>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <label>Status:</label>
//       <select value={status} onChange={(e) => setStatus(e.target.value)}>
//         <option value="available">Disponible</option>
//         <option value="pending">Pendiente</option>
//         <option value="sold">Vendido</option>
//       </select>
//       <button type="submit">Actualizar</button>
//     </form>
//   );
// };

// export default UpdatePet;

// VERSION 2

// import React, { useState } from "react";
// import { updatePet } from "../services/api";

// const UpdatePet = () => {
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [status, setStatus] = useState("available");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const pet = { id: parseInt(id), name, status };
//     const response = await updatePet(pet);
//     alert(`Mascota actualizada: ${response.name}`);
//   };

//   return (
//     <div className="update-pet-container bg-gray-50 p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold text-pink-600 mb-4">Actualizar Mascota</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* ID */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-2">ID:</label>
//           <input
//             type="number"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
//             placeholder="Ingresa el ID de la mascota"
//           />
//         </div>

//         {/* Nombre */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-2">Nombre:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
//             placeholder="Ingresa el nombre de la mascota"
//           />
//         </div>

//         {/* Estado */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-2">Estado:</label>
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
//           >
//             <option value="available">Disponible</option>
//             <option value="pending">Pendiente</option>
//             <option value="sold">Vendido</option>
//           </select>
//         </div>

//         {/* Botón */}
//         <button
//           type="submit"
//           className="w-full bg-pink-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-700 transition-all duration-200"
//         >
//           Actualizar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdatePet;

// VERSION 3

import React, { useState } from "react";
import { updatePet } from "../services/api";

const UpdatePet = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("available");
  const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar el modal
  const [petName, setPetName] = useState(""); // Almacena el nombre de la mascota actualizada

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pet = { id: parseInt(id), name, status };
    try {
      const response = await updatePet(pet);
      setPetName(response.name); // Guarda el nombre de la mascota actualizada
      setShowModal(true); // Muestra el modal de confirmación
    } catch (error) {
      console.error("Error al actualizar la mascota:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false); // Oculta el modal
    setId(""); // Limpia el formulario
    setName("");
    setStatus("available");
  };

  return (
    <div className="update-pet-container bg-gray-50 p-6 rounded-lg shadow-md relative">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">Actualizar Mascota</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ID */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">ID:</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
            placeholder="Ingresa el ID de la mascota"
          />
        </div>

        {/* Nombre */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
            placeholder="Ingresa el nombre de la mascota"
          />
        </div>

        {/* Estado */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Estado:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
          >
            <option value="available">Disponible</option>
            <option value="pending">Pendiente</option>
            <option value="sold">Vendido</option>
          </select>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-700 transition-all duration-200"
        >
          Actualizar
        </button>
      </form>

      {/* Modal de Confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-pink-600 mb-2">¡Mascota actualizada con éxito!</h3>
            <p className="text-gray-500 mb-4">Nombre de la mascota: <span className="font-bold">{petName}</span></p>
            <button
              onClick={closeModal}
              className="bg-pink-500 text-white font-medium py-2 px-4 rounded-md hover:bg-pink-600 transition duration-200"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePet;
