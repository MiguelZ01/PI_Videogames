import { useState } from "react";
import axios from "axios";

const Navbar = () => {

   const [videogames, setVideogames] = useState([]);
   const [name, setName] = useState("");

   const handleChange = (event) => {
      setName(event.target.value);
   };

   const onSearch = async (name) => {

      try {
         const { data } = await axios(`http://localhost:3001/Videogames/name/?name=${name}`);

         setVideogames((videog) => [...videog, data]);
      } catch (error) {
         window.alert("¡No hay personajes con este nombre!");
      }
   };

   return (
      <div>
         <input type="search" onChange={handleChange} value={name} />
         <div>
            <button onClick={() => { onSearch(name); setName(""); }}> ADD </button>
         </div>
         <ul>
            {videogames.map((videogame) => (
               <li key={videogame.name}>{videogame.name}</li>
            ))}
         </ul>
      </div>
   );
};

export default Navbar; 