import React from 'react';
import './Card.css';
import Flag_of_VietNam from '../../images/Flag_of_Vietnam.svg.webp'

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
            <div>
                <p className={!top ? 'title' : 'title_top'}>{title}</p>
                <img src={Flag_of_VietNam} alt="" />
            </div>
        </div>
    )
}

export default CardBasic