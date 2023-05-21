import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { GET_detail } from '../../../redux/actions/action'
import style from './Detail.module.css';
import { NavLink } from 'react-router-dom';


const Detail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const [videogame, setVideogame] = useState({})

    useEffect(() => {
        dispatch(GET_detail(id)).then((response) => {
            setVideogame(response.payload)
        }).catch((error) => {
            alert("Videogame not found")
        })
    }, [dispatch, id])

    return (
        <div className={style.content}>
            <div className={style.card}>
                <div className={style.card__content}>
                    <div className={style.img}>
                        <img src={videogame.imagen} alt="" className={style.imagen} />
                    </div>
                    <h1>{videogame.name}</h1>
                    <h3>Id: {videogame.id}</h3>
                    <h3>Rating: {videogame.rating} </h3>
                    <h3>Date: {videogame.date}</h3>
                    <h3>Genres: {videogame.genres}</h3>
                    <h3>Platforms: {videogame.platforms}</h3>
                    <h3> Description: {videogame.description}</h3>

                    <div className={style.content__button}>
                        <button className={style.button}>
                            <NavLink to='/home' className={style.link}>
                                <span>Home</span>
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail