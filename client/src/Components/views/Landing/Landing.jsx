import style from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
   const navigate = useNavigate();

   return (
      <div className={style.principal}>
         <img src='' alt="" />
         <div className={style.landing}>
            <div to="/" className={style.content}>
               <h3>Welcome to this platform!</h3>
               <button onClick={() => navigate("/home")} className={style.btn}><span></span>Ingresar</button>
            </div>
            <div className={style.img}>
               <iframe src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dee38e10-db68-462d-9df7-46b87d4c7876/ddztlt8-d34769a4-8943-471e-b28a-d12d7d1d4d6e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RlZTM4ZTEwLWRiNjgtNDYyZC05ZGY3LTQ2Yjg3ZDRjNzg3NlwvZGR6dGx0OC1kMzQ3NjlhNC04OTQzLTQ3MWUtYjI4YS1kMTJkN2QxZDRkNmUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.E5Yke6csll-bRozhP3zx-OR53101tRju40i3Jjf7OOI" height="445" width="345" frameborder="0" scrolling="no" ></iframe>
            </div>
         </div>
      </div>
   );
};

export default Landing;
