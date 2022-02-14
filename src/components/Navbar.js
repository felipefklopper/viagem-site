import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import {Button} from "./Button";
import "./Navbar.css";

function Navbar() {
    const [button, setButton] =useState(true);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth < 960) {
            setButton (false);
        } else {
            setButton (true);
        }
    };
    
    useEffect(()=>{showButton();},[]);

    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    TRIP STARS <i class="fa fa-space-shuttle"></i>
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Início
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pacotes" className="nav-links" onClick={closeMobileMenu}>
                            Pacotes
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/destinos" className="nav-links" onClick={closeMobileMenu}>
                            Destinos
                        </Link>
                    </li>                  
                    <li className="nav-item">
                        <Link to="/entrar" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Entrar
                        </Link>
                    </li>
                    

                </ul>
                {button && <Button buttonStyle="btn--outline">Entrar</Button>}
                
            </div>
        </nav>
    </>

  );
}

export default Navbar;
