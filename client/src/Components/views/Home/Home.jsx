import React from "react";
import style from './Home.module.css'
import SearchBar from '../../SearchBar/SearchBar';
import Card from '../Home/Home'

const Home = ({ onSearch }) => {

  return (
    <div className={style.principal}>
      <div className={style.search}>
        <SearchBar onSearch={onSearch} className={style.SearchBar} />
        <Card />

      </div>
    </div>
  )
};

export default Home;
