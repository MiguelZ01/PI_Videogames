import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetGenres, FilterGenres, DB_API, ORDER_RATINGS, ORDER_ALFABETICO } from '../../redux/actions/action'
import { NavLink } from 'react-router-dom';
import style from './Filter.module.css';


const Filter = () => {
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(GetGenres())
    }, [dispatch])

    const handleGenres = (event) => {
        const { value } = event.target;
        dispatch(FilterGenres(value))
    }

    const handleLocated = (event) => {
        const { value } = event.target;
        dispatch(DB_API(value))
    }

    const handleName = (event) => {
        const { value } = event.target;
        dispatch(ORDER_ALFABETICO(value))
    }

    const handleRating = (event) => {
        const { value } = event.target;
        dispatch(ORDER_RATINGS(value))
    }

    return (
        <div className={style.content} >
            <select className={style.select} name="FILTER" onChange={handleGenres}>
                <option value="GENRES">
                    Genres
                </option>

                {
                    genres?.map((genre) => {
                        return (
                            <option value={genre.name} key={genre.id}>
                                {genre.name}
                            </option>
                        )
                    })

                }
            </select>
            <select className={style.select} name="FILTER" onChange={handleLocated}>
                <option disabled="disabled">Videogames</option>
                <option value="ALL">All</option>
                <option value="API">Existing</option>
                <option value="DB">Created</option>
            </select>

            <select className={style.select} name="ORDER" onChange={handleName}>
                <option disabled="disabled">Alpha</option>
                <option value="Default">None</option>
                <option value="A-Z">Name A/Z</option>
                <option value="Z-A">Name Z/A</option>
            </select>

            <select className={style.select} name="ORDER" onChange={handleRating}>
                <option disabled="disabled">Rating</option>
                <option value="Default">None</option>
                <option value="5-0">Rating 5-0</option>
                <option value="0-5">Rating 0-5</option>
            </select>

            <NavLink to='/create' className={style.link}>
                <button className={style.button}>
                    <span>CREATE</span>
                </button>
            </NavLink>
        </div>
    )
}

export default Filter