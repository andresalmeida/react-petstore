// import React, { useState, useEffect } from "react";
// import { getInventory } from "../services/api";

// const Inventory = () => {
//   const [inventory, setInventory] = useState({});

//   useEffect(() => {
//     getInventory().then(setInventory);
//   }, []);

//   return (
//     <div>
//       <h2>Inventario</h2>
//       <ul>
//         {Object.entries(inventory).map(([status, count]) => (
//           <li key={status}>
//             {status}: {count}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Inventory;

import React, { useState, useEffect } from "react";
import { getInventory } from "../services/api";

const Inventory = () => {
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    getInventory().then(setInventory);
  }, []);

  return (
    <div className="inventory-container bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">Inventario</h2>
      <ul className="divide-y divide-gray-200">
        {Object.entries(inventory).map(([status, count]) => (
          <li
            key={status}
            className="flex justify-between items-center py-2 px-4 bg-white rounded-md shadow-sm hover:bg-pink-50 transition-all duration-200 ease-in-out"
          >
            <span className="text-gray-700 font-medium capitalize">{status}</span>
            <span className="text-pink-600 font-bold">{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
