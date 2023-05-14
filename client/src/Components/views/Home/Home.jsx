import React from "react";
import style from './Home.module.css'
import Navbar from '../../Navbar/Navbar';
import Cards from '../../Cards/Cards'

const Home = ({ onSearch }) => {

  return (
    <div className={style.principal}>
      <div className={style.search}>
        <Navbar onSearch={onSearch} className={style.SearchBar} />
        {/* <Cards /> */}

      </div>
    </div>
  )
};

export default Home;
