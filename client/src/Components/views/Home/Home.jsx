import style from './Home.module.css';
import Navbar from '../../Navbar/Navbar';
import Card from '../../Card/Card';
import Filter from "../../Filter/Filter";

const Home = () => {

  return (
    <div className={style.principal}>
      <div className={style.search}>

        <div className={style.content}>
          <div>
            <Filter />
          </div>
        </div>
        <Navbar />

        <Card />
      </div>
    </div>
  )
};

export default Home;
