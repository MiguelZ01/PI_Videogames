import style from "./Nav.module.css";

const Landing = () => {
  return (
    <div className={style.Principal}>
      <div>
        <h3>Welcome to this platform!</h3>
        <div to="/home">
          <button>Ingresar</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
