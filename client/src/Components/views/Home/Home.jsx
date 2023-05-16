import { useState } from "react";
import style from './Home.module.css';
import Navbar from '../../Navbar/Navbar';
import Card from '../../Card/Card';
import Paginate from "../../Paginate/Paginate";
import { videogameGET } from '../../../redux/actions/action'

const Home = () => {

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(3)

  const maximo = videogameGET.length / porPagina

  return (
    <div className={style.principal}>
      <div className={style.search}>
        <Navbar />
        <Card />
        <Paginate pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </div>
    </div>
  )
};

export default Home;
