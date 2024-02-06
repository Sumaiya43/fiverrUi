import React from 'react'

import "./Featured.scss"

const Featured = () => {
    return (
        <div className='featured'>
            <div className="container">
                <div className="left">
                    <h1>Find the right <i>freelance</i> service, right away</h1>
                    <div className="search">
                        <div className="searchInput">
                            <input type="text" placeholder='Search for any service..' />
                        </div>
                        <button><img src="/public/img/search.png" alt="" /></button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>WordPress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className="right">
                    <img src="/public/img/man.png" alt="" />
                    {/* <img src="https://i.ibb.co/R9ygtbw/featured.png" alt="featured"  /> */}
                </div>
            </div>
        </div>
    )
}

export default Featured