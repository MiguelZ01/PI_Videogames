import { useState } from "react";
import style from './Home.module.css';
import Navbar from '../../Navbar/Navbar';
import Card from '../../Card/Card';

const Home = () => {

  return (
    <div className={style.principal}>
      <div className={style.search}>
        <Navbar />
        <Card />

      </div>
    </div>
  )
};

export default Home;
