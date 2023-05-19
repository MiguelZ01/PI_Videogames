import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetGenres, filter, DBorAPI, ORDER_RATINGS, ORDER_ALFABETICO } from '../../redux/actions/action'
import style from './Filter.module.css';


const Filter = () => {
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(GetGenres())
    }, [dispatch])

    const handleFilter = (event) => {
        const { value } = event.target;
        dispatch(filter(value))
    }

    const handlefilter = (event) => {
        const { value } = event.target;
        dispatch(DBorAPI(value))
    }

    const handleOrder = (event) => {
        const { value } = event.target;
        dispatch(ORDER_ALFABETICO(value))
    }

    const handleorder = (event) => {
        const { value } = event.target;
        dispatch(ORDER_RATINGS(value))
    }

    return (
        <div>
            <select className={style.select} name="GENRES" onChange={handleFilter}>
                {/* <optgroup label='GENRES'></optgroup> */}
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
            <select className={style.select} name="TYPES" onChange={handlefilter}>
                <option value="ALL">ALL</option>
                <option value="API">API</option>
                <option value="DB">DB</option>
            </select>

            <select className={style.select} name="ORDER" onChange={handleOrder}>
                <option value="Default">None</option>
                <option value="A-Z">Name (a-z)</option>
                <option value="Z-A">Name (z-a)</option>
            </select>

            <select className={style.select} name="ORDER" onChange={handleorder}>
                <option value="Default">None</option>
                <option value="5-0">Rating (5-0)</option>
                <option value="0-5">Rating (0-5)</option>
            </select>
        </div>
    )
}

export default Filter