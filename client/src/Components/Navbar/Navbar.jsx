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
        <div className={style.control}>
            <input
                type="search"
                onChange={handleChange}
                value={search}
                className={style.textInput}
                required=''
            />
            <label>
                <span style={{ transitionDelay: '0ms' }}>U</span>
                <span style={{ transitionDelay: '50ms' }}>s</span>
                <span style={{ transitionDelay: '100ms' }}>e</span>
                <span style={{ transitionDelay: '150ms' }}>r</span>
                <span style={{ transitionDelay: '200ms' }}>n</span>
                <span style={{ transitionDelay: '250ms' }}>a</span>
                <span style={{ transitionDelay: '300ms' }}>m</span>
                <span style={{ transitionDelay: '350ms' }}>e</span>
            </label>
            <div>
                <button onClick={handleSubmit} className={style.boton}> BUSCAR </button>
            </div>
        </div>
    );
}

export default Navbar;
