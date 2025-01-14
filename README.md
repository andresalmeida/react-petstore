# 🐶 Guía de Usuario: Gestionando Mascotas en la PetStore API 🐱

✨ **Bienvenido al Sistema de Gestión de Mascotas** ✨

Esta guía te proporcionará los pasos necesarios para usar nuestra aplicación desplegada. Desde registrar nuevas mascotas hasta gestionar pedidos de compra, esta guía te ayudará en cada acción que necesites realizar.

## 🏠 Introducción al Producto

Nuestra aplicación está diseñada para:

- Crear y actualizar datos de mascotas.
- Consultar el inventario disponible en la tienda.
- Realizar pedidos de compra de mascotas.
- Gestionar las acciones de manera sencilla y rápida.

La aplicación se basa en tecnologías modernas como React, TailwindCSS y la API de PetStore.

## 🔍 Cómo Acceder a la Aplicación

1. Abre tu navegador favorito (Google Chrome, Firefox, Edge, etc.).
2. Dirígete a la siguiente URL: [Api Mascotitas](https://andresalmeida.github.io/react-petstore/)
3. Asegúrate de contar con conexión a internet estable.

## 📖 Guía Paso a Paso

### 1. Crear una Mascota Nueva

1. Haz clic en la pestaña Crear Mascota en el menú principal.
2. Rellena el formulario con los siguientes datos:
   - Nombre de la mascota (Ej.: “Firulais”).
   - Estado (“Disponible”, “Vendido” o “Pendiente”).
3. Presiona el botón Guardar. 🎉
4. Aparecerá un mensaje de éxito confirmando que la mascota se creó correctamente.

> 👀 **Nota**: Si olvidas algún campo, la aplicación te lo notificará para que puedas completarlo antes de guardar.

### 2. Actualizar los Datos de una Mascota

1. Ve a la pestaña "**Lista de Mascotas**".
2. Identifica la mascota que deseas actualizar.
3. Copia el **ID** de la mascota que deseas editar.
4. Ve a la pestaña "**Actualizar Mascota**".
5. Modifica los campos necesarios (nombre o estado).
6. Haz clic en "**Actualizar**".
7. Aparecerá un mensaje confirmando los cambios. 🎉

### 3. Ver la Lista de Mascotas

1. Haz clic en la pestaña Lista de Mascotas.
2. Verás un listado con todas las mascotas registradas, incluyendo su:
   - **ID**: Identificador único de la mascota.
   - **Nombre**: Nombre de la mascota.
   - **Estado**: Estado actual de la mascota ("Disponible", "Vendido", "Pendiente").'

> 👀 **Nota**: Puedes utilizar filtros para ordenar las mascotas por estado, pues la lista es muy larga y la API está constantemente registrando mascotas.

### 4. Consultar el Inventario de la Tienda

1. Ve a la pestaña Inventario.
2. Observa la cantidad de mascotas disponibles, clasificadas por estado (“Disponible”, “Pendiente”, etc.).

### 5. Crear una Orden para Comprar una Mascota

1. En la lista de mascotas, selecciona la mascota que deseas comprar.
2. 3. Copia el **ID** de la mascota que deseas editar.
4. Ve a la pestaña "**Crear Orden**".
5. Llena los campos necesarios (nombre y fecha de entrega).
3. Haz clic en el botón "**Comprar**".
4. Aparecerá un mensaje de confirmación con el éxito de la compra. ✨

> 👀 **Nota**: Ten en cuenta que, dependiendo de la disponibilidad, algunas mascotas podrían no estar disponibles para su compra en ese momento.

## 🎨 Diagramas Explicativos

### Diagrama de Componentes

Este diagrama muestra cómo interactúan los principales componentes del sistema: la aplicación React y la API de PetStore.

```mermaid
---
config:
  theme: forest
  look: classic
  layout: dagre
---
flowchart TD
    subgraph ReactApp["Frontend fa:fa-code"]
        Component1["Inventory.js"]
        Component2["CreatePet.js"]
        Component3["UpdatePet.js"]
        Component4["PetList.js"]
        Component5["CreateOrder.js"]
    end
    ReactApp -- HTTP Requests --> API["API PetStore fa:fa-server"]
    API -- JSON Responses --> ReactApp
```
> 🤓☝🏻 **Explicación**: La aplicación React se encarga de la interfaz de usuario (UI), y se comunica con la API para enviar y recibir datos en formato JSON. Este flujo asegura que la información esté siempre actualizada.

### Diagrama de Clases

Este diagrama muestra la estructura de las clases utilizadas en la aplicación, que interactúan entre sí para gestionar las mascotas y las órdenes de compra.

```mermaid
---
config:
  theme: forest
---
classDiagram
    class Pet {
        <<Entity>>
        +int id
        +string name
        +string status
    }
    class Order {
        <<Entity>>
        +int id
        +int petId
        +Date orderDate
        +string status
    }
    class API {
        <<Service>>
        +getInventory() fa:fa-boxes
        +createPet(Pet pet) fa:fa-paw
        +updatePet(Pet pet) fa:fa-edit
        +createOrder(Order order) fa:fa-shopping-cart
    }
    Pet <-- Order : "1,1"
    API ..> Pet : "Manages"
    API ..> Order : "Manages"
```
> 🤓☝🏻 **Explicación**
> - La clase `Mascota` tiene los atributos que definen a cada mascota en el sistema, como `id`, `nombre`, `estado`, y métodos para crear, actualizar y eliminar mascotas.
> - La clase `Orden` maneja los pedidos realizados por los clientes para comprar mascotas. Cada orden está vinculada a una mascota específica y tiene métodos para crear, actualizar o cancelar una orden.
> - La clase `Inventario` maneja el listado de mascotas disponibles, permitiendo consultar y actualizar el inventario.

### Diagrama de Secuencia

El diagrama de secuencia a continuación muestra cómo se realiza la creación de una nueva mascota, desde que el usuario llena el formulario hasta que el sistema guarda la información.

```mermaid
---
config:
  theme: forest
---
sequenceDiagram
    participant User as Usuario
    participant UI as Interfaz React
    participant API as API PetStore
    participant DB as Base de Datos
    User->>UI: Ingresar ID de mascota
    UI->>API: GET /pet/{id}
    API->>DB: Consulta datos de la mascota
    DB-->>API: Retorna datos de la mascota
    API-->>UI: Retorna detalles de la mascota
    UI->>User: Mostrar detalles en el formulario
    User->>UI: Enviar formulario
    UI->>API: POST /store/order
    API->>DB: Registrar orden
    DB-->>API: Confirmar registro
    API-->>UI: Retornar confirmación de la orden
    UI->>User: Mostrar mensaje de éxito
```

> 🤓☝🏻 **Explicación**: El usuario ingresa los datos en el formulario de la aplicación frontend, que luego envía una solicitud a la API. La API procesa la información y confirma el éxito, lo que se refleja en la interfaz del usuario.

## 🚨 Notas y Consejos Adicionales
- **Seguridad**: La aplicación está diseñada para ser intuitiva y fácil de usar, pero recuerda ingresar datos sensibles, pues es una API pública que está en uso recurrentemente.
- **Actualizaciones**: Si realizas cambios en los datos de una mascota, asegúrate de guardar los cambios antes de navegar a otra sección.

