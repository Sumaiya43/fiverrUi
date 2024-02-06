import React, { useEffect, useState } from 'react'
import "./Navbar.scss"

const Navbar = () => {


    const [active, setactive] = useState(false);
    const [open, setOpen] = useState(false);
    
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
        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <span className='text'>fiverr</span>
                    <span className='dot'>.</span>
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
                                        <span>Gigs</span>
                                        <span>Add New Gig</span>
                                    </>
                                )}
                                <span>Orders</span>
                                <span>Messages</span>
                                <span>Logout</span>
                            </div>}
                            

                        </div>
                    )
                    }
                </div>
            </div>


            {active &&
                <> <hr />
                    <div className='menu'>
                        <span>text1</span>
                        <span>text2</span>
                    </div>
                </>
            }
        </div>

    )
}

export default Navbar