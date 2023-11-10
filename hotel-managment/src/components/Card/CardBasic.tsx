import React from 'react';
import './Card.css';

interface ICardBasic {
    width: string
    height: string
    src: string
    title: string
    top: boolean
    // desc: string | null
}

const CardBasic: React.FC<ICardBasic> = ({
    width,
    height,
    src,
    title,
    top,
    // desc
}) => {
    return (
        <div
            className="card"
            style={{ width: width, height: height }}
        >
            <img src={src} alt="" />
            <p className={!top ? 'title' : 'title_top'}>{title}</p>
        </div>
    )
}

export default CardBasic