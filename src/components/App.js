// // src/components/App.js
// import React from "react";
// import Inventory from "./Inventory";
// import CreatePet from "./CreatePet";
// import UpdatePet from "./UpdatePet";
// import PetList from "./PetList";
// import CreateOrder from "./CreateOrder";

// //Importar estilos de styles/App.css
// import "../styles/App.css";

// const App = () => {
//   return (
//     <div className="App">
//       <header>
//         <h1>Petstore App</h1>
//       </header>
//       <div className="container">
//         <Inventory />
//         <CreatePet />
//         <UpdatePet />
//         <PetList />
//         <CreateOrder />
//       </div>
//     </div>
//   );
// };

// export default App;

// CODIGO VERSION 2

// import React, { useState } from "react";
// import Inventory from "./Inventory";
// import CreatePet from "./CreatePet";
// import UpdatePet from "./UpdatePet";
// import PetList from "./PetList";
// import CreateOrder from "./CreateOrder";

// //Importar estilos de styles/App.css
// import "../styles/App.css";

// const App = () => {
//   const [selectedTab, setSelectedTab] = useState("inventory"); // Estado para manejar la pestaña seleccionada

//   return (
//     <div className="App">
//       <header>
//         <h1>Petstore App</h1>
//       </header>
      
//       {/* Pestañas */}
//       <div className="tabs">
//         <button
//           onClick={() => setSelectedTab("inventory")}
//           className={selectedTab === "inventory" ? "active" : ""}
//         >
//           Inventory
//         </button>
//         <button
//           onClick={() => setSelectedTab("createPet")}
//           className={selectedTab === "createPet" ? "active" : ""}
//         >
//           Create Pet
//         </button>
//         <button
//           onClick={() => setSelectedTab("updatePet")}
//           className={selectedTab === "updatePet" ? "active" : ""}
//         >
//           Update Pet
//         </button>
//         <button
//           onClick={() => setSelectedTab("petList")}
//           className={selectedTab === "petList" ? "active" : ""}
//         >
//           Pet List
//         </button>
//         <button
//           onClick={() => setSelectedTab("createOrder")}
//           className={selectedTab === "createOrder" ? "active" : ""}
//         >
//           Create Order
//         </button>
//       </div>

//       {/* Contenido basado en la pestaña seleccionada */}
//       <div className="container">
//         {selectedTab === "inventory" && <Inventory />}
//         {selectedTab === "createPet" && <CreatePet />}
//         {selectedTab === "updatePet" && <UpdatePet />}
//         {selectedTab === "petList" && <PetList />}
//         {selectedTab === "createOrder" && <CreateOrder />}
//       </div>
//     </div>
//   );
// };

// export default App;


// CODIGO VERSION 3

// import React, { useState } from "react";
// import Inventory from "./Inventory";
// import CreatePet from "./CreatePet";
// import UpdatePet from "./UpdatePet";
// import PetList from "./PetList";
// import CreateOrder from "./CreateOrder";

// // Importar estilos de styles/App.css
// import "../styles/App.css";

// const App = () => {
//   const [selectedTab, setSelectedTab] = useState("inventory");

//   return (
//     <div className="App">
//       <header className="app-header">
//         <h1>Petstore</h1>
//         <p className="tagline">Compra, crea, actualiza y ordena tus mascotas favoritas</p>
//       </header>

//       {/* Pestañas de navegación */}
//       <div className="tabs">
//         <button
//           onClick={() => setSelectedTab("inventory")}
//           className={`tab-button ${selectedTab === "inventory" ? "active" : ""}`}
//         >
//           Inventario
//         </button>
//         <button
//           onClick={() => setSelectedTab("createPet")}
//           className={`tab-button ${selectedTab === "createPet" ? "active" : ""}`}
//         >
//           Crear Mascota
//         </button>
//         <button
//           onClick={() => setSelectedTab("updatePet")}
//           className={`tab-button ${selectedTab === "updatePet" ? "active" : ""}`}
//         >
//           Actualizar Mascota
//         </button>
//         <button
//           onClick={() => setSelectedTab("petList")}
//           className={`tab-button ${selectedTab === "petList" ? "active" : ""}`}
//         >
//           Lista de Mascotas
//         </button>
//         <button
//           onClick={() => setSelectedTab("createOrder")}
//           className={`tab-button ${selectedTab === "createOrder" ? "active" : ""}`}
//         >
//           Crear Orden
//         </button>
//       </div>

//       {/* Contenedor de contenido basado en la pestaña seleccionada */}
//       <div className="content-container">
//         {selectedTab === "inventory" && <Inventory />}
//         {selectedTab === "createPet" && <CreatePet />}
//         {selectedTab === "updatePet" && <UpdatePet />}
//         {selectedTab === "petList" && <PetList />}
//         {selectedTab === "createOrder" && <CreateOrder />}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import Inventory from "./Inventory";
import CreatePet from "./CreatePet";
import UpdatePet from "./UpdatePet";
import PetList from "./PetList";
import CreateOrder from "./CreateOrder";

// Importar estilos de styles/App.css
import "../styles/tailwind.css";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("inventory");

  return (
    <div className="App bg-gray-100 min-h-screen">
      <header className="app-header bg-pink-600 text-white py-8 text-center shadow-lg">
        <h1 className="text-4xl font-semibold">Petstore</h1>
        <p className="tagline text-lg mt-2">Compra, crea, actualiza y ordena tus mascotas favoritas</p>
      </header>

      {/* Pestañas de navegación */}
      <div className="tabs flex justify-center space-x-4 mt-6">
        <button
          onClick={() => setSelectedTab("inventory")}
          className={`tab-button py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${selectedTab === "inventory" ? "bg-pink-600 text-white" : "bg-white text-pink-600 border-2 border-pink-600"}`}
        >
          Inventario
        </button>
        <button
          onClick={() => setSelectedTab("createPet")}
          className={`tab-button py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${selectedTab === "createPet" ? "bg-pink-600 text-white" : "bg-white text-pink-600 border-2 border-pink-600"}`}
        >
          Crear Mascota
        </button>
        <button
          onClick={() => setSelectedTab("updatePet")}
          className={`tab-button py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${selectedTab === "updatePet" ? "bg-pink-600 text-white" : "bg-white text-pink-600 border-2 border-pink-600"}`}
        >
          Actualizar Mascota
        </button>
        <button
          onClick={() => setSelectedTab("petList")}
          className={`tab-button py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${selectedTab === "petList" ? "bg-pink-600 text-white" : "bg-white text-pink-600 border-2 border-pink-600"}`}
        >
          Lista de Mascotas
        </button>
        <button
          onClick={() => setSelectedTab("createOrder")}
          className={`tab-button py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${selectedTab === "createOrder" ? "bg-pink-600 text-white" : "bg-white text-pink-600 border-2 border-pink-600"}`}
        >
          Crear Orden
        </button>
      </div>

      {/* Contenedor de contenido basado en la pestaña seleccionada */}
      <div className="content-container mt-8 p-8 bg-white rounded-lg shadow-lg">
        {selectedTab === "inventory" && <Inventory />}
        {selectedTab === "createPet" && <CreatePet />}
        {selectedTab === "updatePet" && <UpdatePet />}
        {selectedTab === "petList" && <PetList />}
        {selectedTab === "createOrder" && <CreateOrder />}
      </div>
    </div>
  );
};

export default App;
