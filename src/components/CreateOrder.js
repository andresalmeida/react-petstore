// import React, { useState } from "react";
// import { createOrder } from "../services/api";

// const CreateOrder = () => {
//   const [petId, setPetId] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const order = { petId: parseInt(petId), quantity, status: "placed" };
//     const response = await createOrder(order);
//     alert(`Orden creada con ID: ${response.id}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Crear Orden</h2>
//       <label>ID de Mascota:</label>
//       <input
//         type="number"
//         value={petId}
//         onChange={(e) => setPetId(e.target.value)}
//       />
//       <label>Cantidad:</label>
//       <input
//         type="number"
//         value={quantity}
//         onChange={(e) => setQuantity(e.target.value)}
//         min="1"
//       />
//       <button type="submit">Comprar</button>
//     </form>
//   );
// };

// export default CreateOrder;

// VERSION 2

// import React, { useState } from "react";
// import { createOrder } from "../services/api";

// const CreateOrder = () => {
//   const [petId, setPetId] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const order = { petId: parseInt(petId), quantity, status: "placed" };
//     const response = await createOrder(order);
//     alert(`Orden creada con ID: ${response.id}`);
//   };

//   return (
//     <div className="create-order-container bg-pink-50 p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold text-pink-600 mb-4">Crear Orden</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Campo para ID de Mascota */}
//         <div>
//           <label className="block text-pink-700 font-medium mb-2">ID de Mascota:</label>
//           <input
//             type="number"
//             value={petId}
//             onChange={(e) => setPetId(e.target.value)}
//             className="w-full p-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
//             placeholder="Ingrese el ID de la mascota"
//             required
//           />
//         </div>

//         {/* Campo para Cantidad */}
//         <div>
//           <label className="block text-pink-700 font-medium mb-2">Cantidad:</label>
//           <input
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             min="1"
//             className="w-full p-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
//             placeholder="Ingrese la cantidad"
//             required
//           />
//         </div>

//         {/* Botón para Crear Orden */}
//         <button
//           type="submit"
//           className="w-full bg-pink-500 text-white font-medium py-2 px-4 rounded-md hover:bg-pink-600 transition duration-200"
//         >
//           Comprar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateOrder;

// VERSION 3

// import React, { useState } from "react";
// import { createOrder } from "../services/api";

// const CreateOrder = () => {
//   const [petId, setPetId] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar el modal
//   const [orderId, setOrderId] = useState(null); // Almacena el ID de la orden creada

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const order = { petId: parseInt(petId), quantity, status: "placed" };
//     try {
//       const response = await createOrder(order);
//       setOrderId(response.id); // Guarda el ID de la orden creada
//       setShowModal(true); // Muestra el modal de confirmación
//     } catch (error) {
//       console.error("Error al crear la orden:", error);
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false); // Oculta el modal
//     setPetId(""); // Limpia el formulario
//     setQuantity(1);
//   };

//   return (
//     <div className="create-order-container bg-pink-50 p-6 rounded-lg shadow-md relative">
//       <h2 className="text-2xl font-semibold text-pink-600 mb-4">Crear Orden</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Campo para ID de Mascota */}
//         <div>
//           <label className="block text-pink-700 font-medium mb-2">ID de Mascota:</label>
//           <input
//             type="number"
//             value={petId}
//             onChange={(e) => setPetId(e.target.value)}
//             className="w-full p-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
//             placeholder="Ingrese el ID de la mascota"
//             required
//           />
//         </div>

//         {/* Campo para Cantidad */}
//         <div>
//           <label className="block text-pink-700 font-medium mb-2">Cantidad:</label>
//           <input
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             min="1"
//             className="w-full p-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
//             placeholder="Ingrese la cantidad"
//             required
//           />
//         </div>

//         {/* Botón para Crear Orden */}
//         <button
//           type="submit"
//           className="w-full bg-pink-500 text-white font-medium py-2 px-4 rounded-md hover:bg-pink-600 transition duration-200"
//         >
//           Comprar
//         </button>
//       </form>

//       {/* Modal de Confirmación */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-12 text-green-500 mx-auto mb-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <h3 className="text-xl font-semibold text-pink-600 mb-2">¡Orden creada con éxito!</h3>
//             <p className="text-gray-500 mb-4">ID de la orden: <span className="font-bold">{orderId}</span></p>
//             <button
//               onClick={closeModal}
//               className="bg-pink-500 text-white font-medium py-2 px-4 rounded-md hover:bg-pink-600 transition duration-200"
//             >
//               Cerrar
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateOrder;

// VERSION 4

// import React, { useState } from "react";
// import { createOrder } from "../services/api";

// const BASE_URL = "https://petstore.swagger.io/v2"; // Puedes mover esto a un archivo de configuración si prefieres

// const CreateOrder = () => {
//   const [petId, setPetId] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar el modal
//   const [orderId, setOrderId] = useState(null); // Almacena el ID de la orden creada
//   const [errorMessage, setErrorMessage] = useState(""); // Estado para mostrar errores

//   // Función para verificar el estado de la mascota
//   const checkPetAvailability = async (id) => {
//     try {
//       const response = await fetch(`${BASE_URL}/pet/${id}`);
//       if (!response.ok) {
//         throw new Error(`Mascota no encontrada o error al consultar: ${response.statusText}`);
//       }
//       const pet = await response.json();
//       return pet.status === "available"; // Devuelve true si está disponible
//     } catch (error) {
//       console.error("Error al verificar el estado de la mascota:", error);
//       setErrorMessage("Error al verificar el estado de la mascota. Inténtelo de nuevo.");
//       return false;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage(""); // Limpia mensajes de error previos
//     const isAvailable = await checkPetAvailability(petId);

//     if (!isAvailable) {
//       setErrorMessage("La mascota no está disponible para la compra.");
//       return;
//     }

//     const order = { petId: parseInt(petId), quantity, status: "placed" };
//     try {
//       const response = await createOrder(order);
//       setOrderId(response.id); // Guarda el ID de la orden creada
//       setShowModal(true); // Muestra el modal de confirmación
//     } catch (error) {
//       console.error("Error al crear la orden:", error);
//       setErrorMessage("Error al crear la orden. Inténtelo de nuevo.");
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false); // Oculta el modal
//     setPetId(""); // Limpia el formulario
//     setQuantity(1);
//     setErrorMessage(""); // Limpia mensajes de error
//   };

//   return (
//     <div className="create-order-container bg-pink-50 p-6 rounded-lg shadow-md relative">
//       <h2 className="text-2xl font-semibold text-pink-600 mb-4">Crear Orden</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Campo para ID de Mascota */}
//         <div>
//           <label className="block text-pink-700 font-medium mb-2">ID de Mascota:</label>
//           <input
//             type="number"
//             value={petId}
//             onChange={(e) => setPetId(e.target.value)}
//             className="w-full p-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
//             placeholder="Ingrese el ID de la mascota"
//             required
//           />
//         </div>

//         {/* Campo para Cantidad */}
//         <div>
//           <label className="block text-pink-700 font-medium mb-2">Cantidad:</label>
//           <input
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             min="1"
//             className="w-full p-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
//             placeholder="Ingrese la cantidad"
//             required
//           />
//         </div>

//         {/* Mensaje de Error */}
//         {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

//         {/* Botón para Crear Orden */}
//         <button
//           type="submit"
//           className="w-full bg-pink-500 text-white font-medium py-2 px-4 rounded-md hover:bg-pink-600 transition duration-200"
//         >
//           Comprar
//         </button>
//       </form>

//       {/* Modal de Confirmación */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-12 text-green-500 mx-auto mb-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <h3 className="text-xl font-semibold text-pink-600 mb-2">¡Orden creada con éxito!</h3>
//             <p className="text-gray-500 mb-4">ID de la orden: <span className="font-bold">{orderId}</span></p>
//             <button
//               onClick={closeModal}
//               className="bg-pink-500 text-white font-medium py-2 px-4 rounded-md hover:bg-pink-600 transition duration-200"
//             >
//               Cerrar
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateOrder;

import React, { useState } from "react";
import { createOrder } from "../services/api";

const BASE_URL = "https://petstore.swagger.io/v2";

const CreateOrder = () => {
  const [petId, setPetId] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(""); // Nueva fecha de entrega
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const checkPetAvailability = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/pet/${id}`);
      if (!response.ok) {
        throw new Error(`Mascota no encontrada o error al consultar: ${response.statusText}`);
      }
      const pet = await response.json();
      return pet.status === "available";
    } catch (error) {
      console.error("Error al verificar el estado de la mascota:", error);
      setErrorMessage("Error al verificar el estado de la mascota. Inténtelo de nuevo.");
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const isAvailable = await checkPetAvailability(petId);

    if (!isAvailable) {
      setErrorMessage("La mascota no está disponible para la compra.");
      return;
    }

    const order = {
      petId: parseInt(petId),
      deliveryDate, // Incluimos la fecha de entrega
      status: "placed",
    };

    try {
      const response = await createOrder(order);
      setOrderId(response.id);
      setShowModal(true);
    } catch (error) {
      console.error("Error al crear la orden:", error);
      setErrorMessage("Error al crear la orden. Inténtelo de nuevo.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setPetId("");
    setDeliveryDate("");
    setErrorMessage("");
  };

  return (
    <div className="create-order-container bg-pink-50 p-6 rounded-lg shadow-md relative">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">Crear Orden</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo para ID de Mascota */}
        <div>
        <label className="block text-pink-700 font-medium mb-2">ID de Mascota:</label>
        <input
            type="text"
            value={petId}
            onChange={(e) => {
            const value = e.target.value;
            // Permitir solo números
            if (/^\d*$/.test(value)) {
                setPetId(value);
            }
            }}
            className="w-full p-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
            placeholder="Ingrese el ID de la mascota"
            required
        />
        </div>

        {/* Campo para Fecha de Entrega */}
        <div>
          <label className="block text-pink-700 font-medium mb-2">Fecha de Entrega:</label>
          <input
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            className="w-full p-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
            required
          />
        </div>

        {/* Mensaje de Error */}
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

        {/* Botón para Crear Orden */}
        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-medium py-2 px-4 rounded-md hover:bg-pink-600 transition duration-200"
        >
          Comprar
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
            <h3 className="text-xl font-semibold text-pink-600 mb-2">¡Orden creada con éxito!</h3>
            <p className="text-gray-500 mb-4">ID de la orden: <span className="font-bold">{orderId}</span></p>
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

export default CreateOrder;
