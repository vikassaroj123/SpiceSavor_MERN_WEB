import React, { useState } from 'react';
import { Link } from 'react-scroll'
import { GiArrowCursor, GiHamburgerMenu } from 'react-icons/gi'
import { data } from '../restAPI.json'

const NavBar = () => {
    const [show, setShow] = useState(false);
    return (
        <nav>
            <div className="logo">SpiceSavor</div>
            <div className={show ? "navLinks showmenu" : "navLinks"}>
                <div className="links">
                    {
                        data[0].navbarLinks.map(element => {
                            return (
                                <Link to={element.link} key={element.id} spy={true} smooth={true} duration={400} >{element.title}</Link>
                            )
                        })
                    }
                </div>
                <button className="menuBtn">OUR MENU</button>
            </div>
            <div className="hamburger" onClick={() => setShow(!show)}>
                <GiHamburgerMenu />
            </div>
        </nav>
    );
}

export default NavBar;
