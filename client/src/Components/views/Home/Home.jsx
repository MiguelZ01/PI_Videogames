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

        <div className={style.content}>
          <div>
            <Filter />
          </div>

          {/* <NavLink to='/create' className={style.link}>
            <button className={style.button}>
              <span>CREATE</span>
            </button>
          </NavLink> */}
        </div>

        <Card />
      </div>
    </div>
  )
};

export default Home;
