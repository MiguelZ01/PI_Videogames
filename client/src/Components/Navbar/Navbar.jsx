import { useState } from "react";
import { GET_detail, GetByName } from '../../redux/actions/action';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';


const Navbar = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = () => {

        dispatch(GetByName(search))

    };

    return (
        <div className={style.wrapper}>
            <input type="search" onChange={handleChange} value={search} className={style.input} />
            <div>
                <button className={style.submit} onClick={() => { handleSubmit() }}> BUSCAR </button>
                <button className={style.button}>
                    <NavLink to='/' className={style.logout}>
                        <span>Log out</span>
                    </NavLink>
                </button>
            </div>
        </div >
    );
}

export default Navbar; 