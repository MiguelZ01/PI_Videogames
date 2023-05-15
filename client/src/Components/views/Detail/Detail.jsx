import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { GET_detail } from '../../../redux/actions/action'
import style from './Detail.module.css';

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
        <div>
            <img src={videogame.imagen} alt="" className={style.imagen} />
            <h3>id: {videogame.id}</h3>
            <h3>{videogame.name}</h3>
            <h3>{videogame.platforms}</h3>
            <h3>{videogame.description}</h3>
            <h3>{videogame.date}</h3>
            <h3>{videogame.genres}</h3>
        </div>
    )
}

export default Detail