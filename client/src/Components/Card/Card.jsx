import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { videogameGET } from '../../redux/actions/action'
import { NavLink } from 'react-router-dom';
import style from './Card.module.css';

const Card = () => {
    const dispatch = useDispatch();

    const Allvideogames = useSelector((state) => state.videogames)

    useEffect(() => {
        dispatch(videogameGET())
    }, [dispatch])

    return (
        <div>
            {
                Allvideogames.map(({ id, name, imagen, rating }) => {
                    return (
                        <div className={style.principal} key={id}>
                            <NavLink to={`/detail/${id}`}><h3>{name}</h3></NavLink>
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
