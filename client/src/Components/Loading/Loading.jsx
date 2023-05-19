import React from 'react'
import style from '../Loading/Loading.module.css'

const Loading = () => {
    return (
        <div className={style.Loading}>
            <div className={style.loader}></div>
        </div>
    )
}

export default Loading