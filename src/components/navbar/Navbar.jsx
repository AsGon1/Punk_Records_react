// import { removeToken } from '../../utils/localStorage';
import { useState } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';


function Navbar({ onRouteChange, userAvatar }) {

    // Estados
    const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false); // Estado que nos dice si burger menu esta abierto o no
    const [isUserMenuOpened, setIsUserMenuOpened] = useState(false); // Estado que nos dice si el menu desplegable del usuario está abierto o no

    // Referencias

    /* const handleLogout = ()=>{
        removeToken();
        onRouteChange("home");
    } */

    const handleOpenBurgerOptions = () => {
        setIsBurgerMenuOpened(!isBurgerMenuOpened);
    };

    return (
        <nav id='menu'>
            <div className="menu__logo">
                <a href="index.html">
                    <p id="logo-header">PUNK RECORDS</p>
                </a>
            </div>
            <div className={"menu__burger" + (isBurgerMenuOpened ? "active" : "")}>
                <ul className="menu__burger-links" id="nav-apartados">
                    <li className="menu__burger-link">
                        <button onClick={() => onRouteChange("home")}>Home</button>
                    </li>
                    <li className="menu__burger-link">
                        <button onClick={() => onRouteChange("browser")}>Browser</button>
                    </li>
                    <li className="menu__burger-link">
                        <div className="user__avatar" onClick={() => setIsUserMenuOpened(!isUserMenuOpened)}>
                            {userAvatar ? (
                                <img src={userAvatar} alt="user avatar" />
                            ) : (
                                <AccountCircleIcon fontSize="large" />
                            )}
                        </div>
                    </li>
                    {isUserMenuOpened && (
                        <div className="options-popup">
                            <div className="options-container">
                                <ul className="options-user">
                                    <li>Register</li>
                                    {!userAvatar ? (
                                        <li>
                                            <button onClick={() => onRouteChange("login")}>Login</button>
                                        </li>
                                    ) : (
                                        <li onClick={handleLogout}>
                                            Logout
                                        </li>
                                    )}
                                </ul>

                            </div>
                        </div>
                    )}
                </ul>

                <div className="menu__burger-icon" id="burger_icon">
                    <button onClick={() => handleOpenBurgerOptions()}>
                        {!isBurgerMenuOpened ? (
                            <MenuRoundedIcon />
                        ) : (
                            <CloseIcon />
                        )}
                    </button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;