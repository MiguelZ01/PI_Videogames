import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { videogameGET } from '../../redux/actions/action'
import { NavLink } from 'react-router-dom';
import style from './Card.module.css';
import Paginate from "../Paginate/Paginate";

const Card = () => {
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(16)

    const Allvideogames = useSelector((state) => state.videogames)
    const maximo = Math.ceil(Allvideogames.length / porPagina);

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
            <div className={style.principal}>

                {
                    displayedVideogames
                        ?.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
                        .map(({ id, name, imagen, rating }) => {
                            return (
                                <div className={style.container} key={id}>
                                    <div className={style.card}>
                                        <div className={style.front}>
                                            <img src={imagen} alt="image not found" className={style.imagen} />
                                            <h3>{name}</h3>
                                            <h3>{id}</h3>
                                        </div>
                                        <div className={style.detail} >

                                        </div>
                                        <NavLink to={`/detail/${id}`}>
                                            <span>
                                                DETAIL
                                            </span>
                                        </NavLink>
                                    </div>
                                </div>
                            )
                        })
                }
            </div >
            <div>
                <Paginate pagina={pagina} setPagina={setPagina} maximo={maximo} />

            </div>
        </div>
    )
}

export default Card;
