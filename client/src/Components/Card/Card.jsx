import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const card = () => {
    const dispatch = useDispatch();

    const videogamesALL = useSelector((state) => state.Videogames)

    useEffect(() => {
        dispatch(videogameADD())
    }, [dispatch])

    return (
        <div>
            {
                videogamesALL.map(({ id, name, imagen }) => {
                    return (
                        <div>
                            <h3>{id}</h3>
                            <h3>{name}</h3>
                            <img src={imagen} alt="image not found" />
                        </div>
                    )


                })
            }
        </div >
    )
}

export default card;