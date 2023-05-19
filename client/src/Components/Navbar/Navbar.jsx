import { useState } from "react";
import style from './Navbar.module.css';
import { GetByName } from '../../redux/actions/action';
import { useDispatch } from 'react-redux';

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
            </div>
        </div >
    );
}

export default Navbar; 