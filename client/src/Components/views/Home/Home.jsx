import style from './Home.module.css';
import Navbar from '../../Navbar/Navbar';
import Card from '../../Card/Card';
import Filter from "../../Filter/Filter";
import { NavLink } from 'react-router-dom';

const Home = () => {

  return (
    <div className={style.principal}>
      <div className={style.search}>
        <Navbar />
        <Filter />
        <NavLink to='/create'>
          <button>Create</button>
        </NavLink>
        <Card />
      </div>
    </div>
  )
};

export default Home;
