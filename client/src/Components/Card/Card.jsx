import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { videogameGET } from '../../redux/actions/action' // importa la acción videogameADD

const Card = () => { // cambia el nombre de la función a Card con mayúscula inicial
    const dispatch = useDispatch();

    const videogamesALL = useSelector((state) => state.Videogames)

    useEffect(() => {
        dispatch(videogameGET()) // cambia esto para llamar a videogameADD en lugar de la acción
    }, [dispatch])

    return (
        <div>
            {
                videogamesALL.map(({ id, name, background_image, rating }) => { // cambia "imagen" a "image"
                    return (
                        <div key={id}> {/* agrega una key para cada elemento */}
                            <h3>{id}</h3>
                            <h3>{name}</h3>
                            <h3>{rating}</h3>
                            <img src={background_image} alt="image not found" />
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Card; // cambia el nombre de la función a Card y exporta con mayúscula inicial
