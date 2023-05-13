import style from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
   const navigate = useNavigate();

   return (
      <div className={style.Principal}>
         <div>
            <h3>Welcome to this platform!</h3>
            <div to="/">
               <button onClick={() => navigate("/home")}>Ingresar</button>
            </div>
         </div>
      </div>
   );
};

export default Landing;
