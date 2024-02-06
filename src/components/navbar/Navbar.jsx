import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {


    const [active, setactive] = useState(false);
    const [open, setOpen] = useState(false);

    const {pathname} = useLocation()
    
    const isActive = () => {
        window.scrollY > 0 ? setactive(true) : setactive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        }
    }, [])

    const currentUser = {
        id: 1,
        username: "Mazeda",
        isSeller: true
    }

    return (
        <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className='link'>
                        <span className='text'>fiverr</span>
                        <span className='dot'>.</span>
                    </Link>
                    
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className='user' onClick={()=>setOpen(!open)}>
                            <img src="https://png.pngtree.com/template/20191111/ourmid/pngtree-mv-vm-letter-vector-logo-image_332121.jpg" alt="" />
                            <span>{currentUser?.username}</span>
                            {open && <div className='options'>
                                {currentUser?.isSeller && (
                                    <>
                                        <Link to="gigs" className='link' >Gigs</Link>
                                        <Link to="add" className='link'>Add New Gig</Link>
                                    </>
                                )}
                                <Link to="orders" className='link'>Orders</Link>
                                <Link to="messages" className='link'>Messages</Link>
                                <span>Logout</span>
                            </div>}
                            

                        </div>
                    )
                    }
                </div>
            </div>


            {active || pathname !== "/" &&
                <> <hr />
                    <div className='menu'>
                    <Link to="/" className='link'>Writing & Trnaslation</Link>
                    <Link to="/" className='link'>AI Services</Link>
                    <Link to="/" className='link'>Digital Marketing</Link>
                    <Link to="/" className='link'>Music & Audio</Link>
                    <Link to="/" className='link'>Programming & Tech</Link>
                    <Link to="/" className='link'>Business</Link>
                    <Link to="/" className='link'>LifeStyle</Link>
                    </div>
                </>
            }
        </div>

    )
}

export default Navbar