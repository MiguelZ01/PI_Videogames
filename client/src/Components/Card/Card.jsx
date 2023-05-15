import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { videogameGET, limpiado } from '../../redux/actions/action'
import { NavLink } from 'react-router-dom';
import style from './Card.module.css';

const Card = () => {
    const dispatch = useDispatch();

    const Allvideogames = useSelector((state) => state.videogames)

    useEffect(() => {
        dispatch(videogameGET())
        // return () => {
        //     dispatch(limpiado())
        // }
    }, [dispatch])

    return (
        <div>
            {
                Allvideogames.map(({ id, name, imagen, rating }) => {
                    return (
                        <div className={style.principal}  >
                            <h3><NavLink to={`/detail/${id}`}>{name}</NavLink></h3>
                            <h3>{id}</h3>
                            <h3>{rating}</h3>
                            <img src={imagen} alt="image not found" className={style.imagen} />
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Card;
