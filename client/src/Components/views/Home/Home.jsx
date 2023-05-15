import React from "react";
import style from './Home.module.css';
import Navbar from '../../Navbar/Navbar';
import Card from '../../Card/Card';
import Paginate from "../../Paginate/Paginate";

const Home = () => {

  return (
    <div className={style.principal}>
      <div className={style.search}>
        <Navbar />
        <Card />
        {/* <Paginate /> */}
      </div>
    </div>
  )
};

export default Home;
