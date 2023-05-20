import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { videogameGET } from '../../redux/actions/action'
import { NavLink } from 'react-router-dom';
import style from './Card.module.css';
import Paginate from "../Paginate/Paginate";
import Loading from "../Loading/Loading";
import Nintendo from '../../Assets/Nintendo.png';

const Card = () => {
    const [loading, setLoading] = useState(true);
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(15)

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
            .then(() => {
                setLoading(false)
            }).catch((error) => {
                console.error(error)
                setLoading(false)
            })

    }, [dispatch])

    return (
        <div>
            {
                loading ? <Loading /> :
                    <div>
                        <div className={style.principal}>

                            {
                                displayedVideogames
                                    ?.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
                                    .map(({ id, name, imagen, rating }) => {
                                        return (
                                            <div className={style.container} key={id}>
                                                <div className={style.card}>
                                                    <img src={Nintendo} alt="" className={style.logo} />
                                                    <div >
                                                        <img src={imagen} className={style.imagen} alt="image not found" />
                                                    </div>
                                                    <div className={style.front}>
                                                        <NavLink to={`/detail/${id}`} className={style.link}>
                                                            <h3>{name}</h3>
                                                            <h3>{id}</h3>
                                                        </NavLink>
                                                    </div>
                                                    <div className={style.detail} >
                                                    </div>
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
            }

        </div>
    )
}

export default Card;
