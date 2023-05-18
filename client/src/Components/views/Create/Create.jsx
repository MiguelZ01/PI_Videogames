import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { videogamePOST } from '../../../redux/actions/action';
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

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(videogamePOST(videogame));
        alert('Asdasdadadsa')

    }

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
            <form
                onSubmit={handleSubmit}>
                <h3>Welcome to the creation of your own videogame!</h3>
                <div>
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input type="text" name='name' value={videogame.name} onChange={handleChange} />
                    {errors.name && <p style={{ color: "red" }} >{errors.name}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="imagen">
                        Imagen:
                    </label>
                    {/* <input type="file" name="imagen" /> */}
                    <input type="text" name="imagen" value={videogame.imagen} onChange={handleChange} />
                    {errors.imagen && <p style={{ color: "red" }} >{errors.imagen}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="description">
                        Description:
                    </label>
                    <textarea type="text" value={videogame.description} name='description' onChange={handleChange} />
                    {errors.description && <p style={{ color: "red" }} >{errors.description}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="platforms">
                        Platforms:
                    </label>
                    <input type="text" value={videogame.platforms} name='platforms' onChange={handleChange} />
                    {errors.platforms && <p style={{ color: "red" }} >{errors.platforms}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="date">
                        Date:
                    </label>
                    <input type="date" value={videogame.date} name='date' onChange={handleChange} />
                    {errors.date && <p style={{ color: "red" }} >{errors.date}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="rating">
                        Rating:
                    </label>
                    <select name='rating' value={videogame.rating} onChange={handleChange}>
                        <option hidden>Select Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    {errors.rating && <p style={{ color: "red" }} >{errors.rating}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="GENRES">
                        Genres:
                    </label>
                    {
                        genres?.map((mapGenres, index) => (
                            <span key={index}>
                                {mapGenres.name}
                                <input type="checkbox" value={mapGenres.name} name={mapGenres.id} onChange={handleSelect} />
                            </span>
                        ))

                    }
                    {errors.genres && <p style={{ color: "red" }} >{errors.genres}</p>}
                </div>
                <div>
                    <button type='submit'
                        disabled={!videogame.name || !videogame.imagen || !videogame.description || !videogame.platforms || !videogame.date || !videogame.rating || select.length === 0 || errors.name || errors.imagen || errors.description || errors.platforms || errors.date || errors.rating}
                    >
                        Create!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Create