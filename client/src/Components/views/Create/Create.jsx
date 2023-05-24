import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { videogamePOST } from '../../../redux/actions/action';
import { NavLink } from 'react-router-dom';

import validation from './validation'
import style from './Create.module.css';

const Create = () => {

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres)

    const [select, setSelect] = useState([]);

    const [videogame, setVideogame] = useState({
        name: '',
        imagen: '',
        description: '',
        platforms: '',
        date: '',
        rating: '',
        genres: []
    })

    const [errors, setErrors] = useState({
        name: '',
        description: '',
        imagen: '',
        platforms: '',
        date: '',
        rating: '',
        genres: ''
    })



    const handleSelect = (event) => {
        const genresVG = event.target.value
        if (event.target.checked) {
            setVideogame((prev) => ({
                ...prev,
                genres: [...prev.genres, genresVG],
            }))
            setSelect([...select, genresVG])
        } else {
            setSelect(select.filter((selected) => selected !== genresVG));
            setVideogame((prevVG) => ({
                ...prevVG,
                genres: prevVG.genres.filter((selected) => selected !== genresVG)
            }))
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (Object.values(errors).every((error) => error === '')) {
            try {
                await dispatch(videogamePOST(videogame));
                window.alert('The videogame was successfully created.');
            } catch (error) {
                const errorMessage = error.toString().replace(/^Error:\s*/i, '');
                window.alert(errorMessage);
            }
        }
    };



    const handleChange = (event) => {
        setVideogame({
            ...videogame,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...videogame,
            [event.target.name]: event.target.value
        }))
    }


    return (
        <div className={style.principal}>
            <div className={style.border}>
                <div className={style.content}>
                    <form
                        onSubmit={handleSubmit}>
                        <h3>Welcome to the creation of your own videogame!</h3>
                        <div>
                            <input className={style.input} placeholder='Name...' type="text" name='name' value={videogame.name} onChange={handleChange} />
                            {errors.name && <p className={style.validation}>{errors.name}</p>}
                        </div>
                        <br />
                        <div>
                            <input className={style.input} placeholder='Image...' type="text" name="imagen" value={videogame.imagen} onChange={handleChange} />
                            {errors.imagen && <p className={style.validation}>{errors.imagen}</p>}
                        </div>
                        <br />
                        <div>
                            <input className={style.input} placeholder='Description...' type="text" value={videogame.description} name='description' onChange={handleChange} />
                            {errors.description && <p className={style.validation}>{errors.description}</p>}
                        </div>
                        <br />
                        <div>
                            <input className={style.input} placeholder='Platsform...' type="text" value={videogame.platforms} name='platforms' onChange={handleChange} />
                            {errors.platforms && <p className={style.validation}>{errors.platforms}</p>}
                        </div>
                        <br />
                        <div>
                            <label htmlFor="date">
                                Date:
                            </label> <br />
                            <input className={style.input} placeholder='name' type="date" value={videogame.date} name='date' onChange={handleChange} />
                            {errors.date && <p className={style.validation}>{errors.date}</p>}
                        </div>
                        <br />
                        <div>
                            <label htmlFor="rating">
                                Rating:
                            </label> <br />
                            <select className={style.input} name='rating' value={videogame.rating} onChange={handleChange}>
                                <option hidden>Select Rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            {errors.rating && <p className={style.validation}>{errors.rating}</p>}
                        </div>
                        <br />
                        <div >
                            <label htmlFor="GENRES">
                                Genres:
                            </label>
                            <div className={style.genres}>
                                {
                                    genres?.map((mapGenres, index) => (
                                        <span key={index}>
                                            <input type="checkbox" value={mapGenres.name} name={mapGenres.id} onChange={handleSelect} />
                                            {mapGenres.name}
                                        </span>
                                    ))

                                }
                                {errors.genres && <p className={style.validation}>{errors.genres}</p>}
                            </div>
                        </div>
                        <div className={style.buttons}>
                            <button type='submit'
                                className={style.button}
                                disabled={!videogame.name || !videogame.imagen || !videogame.description || !videogame.platforms || !videogame.date || !videogame.rating || select.length === 0 || errors.name || errors.imagen || errors.description || errors.platforms || errors.date || errors.rating}
                            ><span>Create!</span>
                            </button>
                            <NavLink to='/home' className={style.link}>
                                <button className={style.button}>
                                    <span>Home</span>
                                </button>
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create