import React from "react";
import Home from "../views/Home/Home";
import style from './Nav.module.css'
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
   return (
      <div>
         {/* <div className={style.boton}>
            <NavLink className="button" to="/home" element={<Home />}>
               <h3>Home</h3>
            </NavLink>
         </div>
         <div className="searchBar">
            <SearchBar />
         </div> */}
      </div>
   );
};

export default NavBar;
