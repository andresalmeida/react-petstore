// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';

// // Asegúrate de tener la URL correcta para tu API
// const API_URL = 'https://petstore.swagger.io/v2';

// const Root = () => {
//   const [pets, setPets] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Función para hacer la llamada a la API para obtener mascotas
//     const fetchPets = async () => {
//       try {
//         const response = await fetch(`${API_URL}/pet/findByStatus?status=available`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch pets');
//         }
//         const data = await response.json();
//         setPets(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchPets();
//   }, []); // Se ejecuta solo una vez cuando el componente se monta

//   return (
//     <div>
//       <h1>Lista de Mascotas</h1>
//       {error && <p>Error: {error}</p>}
//       <ul>
//         {pets.map((pet) => (
//           <li key={pet.id}>
//             <h2>{pet.name}</h2>
//             <p>Category: {pet.category.name}</p>
//             <p>Status: {pet.status}</p>
//             <img src={pet.photoUrls[0]} alt={pet.name} style={{ width: '200px' }} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import './styles/tailwind.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
