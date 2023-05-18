import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { videogameGET } from '../../redux/actions/action'
import { NavLink } from 'react-router-dom';
import style from './Card.module.css';
import Paginate from "../Paginate/Paginate";

const Card = () => {
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(15)

    const Allvideogames = useSelector((state) => state.videogames)
    const maximo = Allvideogames.length / porPagina;

    const filter = useSelector((state) => state.filter);

    let displayedVideogames = Allvideogames;
    if (filter) {
        displayedVideogames = filter;
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(videogameGET())
    }, [dispatch])

    return (
        <div>
            <Paginate pagina={pagina} setPagina={setPagina} maximo={parseInt(maximo)} />

            {
                displayedVideogames
                    ?.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
                    .map(({ id, name, imagen, rating }) => {
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
