import React from 'react'
import "./CatCArd.scss"
import { Link } from 'react-router-dom'

const CatCard = ({item}) => {
    return (
        <div className='catCard'>
            
                <Link to="/gigs?cat=design">
                    <div className="catCard">
                        <img src={item.img} alt="" />
                        <span className="desc">{item.desc}</span>
                        <span className="title">{item.title}</span>
                    </div>
                </Link>
           
        </div>
    )
}

export default CatCard