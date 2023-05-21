import React from 'react'
import style from '../Error/Error.module.css'
import pageerror from '../../Assets/Pageerror.png'
import { NavLink } from 'react-router-dom';
const Error = () => {
    return (
        <div className={style.error}>
            <div className={style.content}>
                <div className={style.img}>
                    <img src={pageerror} alt="" />
                </div>
                <br />
                <h2>you are lost, return to the home page</h2>
                <NavLink to='/home' className={style.link}>
                    <button className={style.btn}>
                        <span>Home</span>
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default Error