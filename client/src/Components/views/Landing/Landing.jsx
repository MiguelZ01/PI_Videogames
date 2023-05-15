import style from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
   const navigate = useNavigate();

   return (
      <div className={style.fondo}>
         <div className={style.principal}>
            <div className={style.landing}>
               <div to="/" className={style.content}>
                  <h3>Welcome to this platform!</h3>
                  <button onClick={() => navigate("/home")} className={style.btn}><span></span>Ingresar</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Landing;
