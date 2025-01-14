// src/services/api.js

const BASE_URL = "https://petstore.swagger.io/v2";

export const getInventory = async () => {
  const response = await fetch(`${BASE_URL}/store/inventory`);
  return response.json();
};

export const createPet = async (pet) => {
  const response = await fetch(`${BASE_URL}/pet`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pet),
  });
  return response.json();
};

export const updatePet = async (pet) => {
  const response = await fetch(`${BASE_URL}/pet`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pet),
  });
  return response.json();
};

// export const getPetsByStatus = async (status) => {
//   const response = await fetch(`${BASE_URL}/pet/findByStatus?status=${status}`);
//   return response.json();
// };

export const getPetsByStatus = async (status) => {
    try {
      const response = await fetch(`${BASE_URL}/pet/findByStatus?status=${status}`);
      if (!response.ok) {
        throw new Error(`Error en la API: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
  
      // Verificar que data es un array válido
      if (!Array.isArray(data)) {
        throw new Error("La respuesta de la API no es válida");
      }
  
      return data; // Retornar la lista de mascotas
    } catch (error) {
      console.error("Error al obtener mascotas:", error.message);
      return []; // Devolver una lista vacía en caso de error
    }
  };
  

export const createOrder = async (order) => {
  const response = await fetch(`${BASE_URL}/store/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  return response.json();
};

// Nueva función para subir imágenes
export const uploadPetImage = async (id, image, additionalMetadata) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("additionalMetadata", additionalMetadata);
  
    const response = await fetch(`${BASE_URL}/pet/${id}/uploadImage`, {
      method: "POST",
      body: formData,
    });
  
    return response.json();
  };