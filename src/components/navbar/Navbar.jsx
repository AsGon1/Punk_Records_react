import { useEffect, useState } from "react";

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import RouteContext from '../../context/routeContext';
import { AuthContext } from "../../context/authContext";

import { getToken, removeToken } from '../../utils/localstorage';

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';


function Navbar() {

    // Estados
    const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false); // Estado que nos dice si burger menu esta abierto o no
    const [isUserMenuOpened, setIsUserMenuOpened] = useState(false); // Estado que nos dice si el menu desplegable del usuario está abierto o no

    const { route, onRouteChange } = useContext(RouteContext);
    const { onLogout, userData } = useContext(AuthContext);

    const handleOpenBurgerOptions = () => {
        console.log(userData);
        setIsBurgerMenuOpened(!isBurgerMenuOpened);
    };

    return (
        <nav id='menu'>
            <div className="menu__logo">
                <NavLink className="menu__logo-link" to="/home">PUNK RECORDS</NavLink>
            </div>
            <div className={"menu__burger"}>
                <ul className={"menu__burger-links " + (isBurgerMenuOpened ? "active" : "")} id="nav-apartados">
                    <li className="menu__burger-link">
                        <NavLink to="/home">HOME</NavLink>
                    </li>
                    <li className="menu__burger-link">
                        <NavLink to="/browser">BROWSER</NavLink>
                    </li>
                    <li className="menu__burger-link">
                        <div className="user__avatar" onClick={() => setIsUserMenuOpened(!isUserMenuOpened)}>
                            <AccountCircleIcon fontSize="medium" />
                        </div>
                    </li>
                    {isUserMenuOpened && (
                        <div className="options-popup">
                            <div className="options-container">
                                <ul className="options-user">
                                    <li className="menu__user-link">
                                        <NavLink to="/register">Register</NavLink>
                                    </li>
                                    {userData === null? (
                                        <li className="menu__user-link">
                                            <NavLink to="/login">Login</NavLink>
                                        </li>
                                    ) : ((
                                        <>
                                            <li className="menu__user-link">
                                                <NavLink to="/favorites">Favorites</NavLink>
                                            </li>
                                            <li className="menu__user-link">
                                                <NavLink to="/reviews">Reviews</NavLink>
                                            </li>
                                            <li className="menu__user-link" onClick={onLogout}>
                                                Logout
                                            </li>
                                        </>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </ul>

                <div className="menu__burger-icon" id="burger_icon" onClick={() => handleOpenBurgerOptions()}>
                    {!isBurgerMenuOpened ? (
                        <MenuRoundedIcon />
                    ) : (
                        <CloseIcon />
                    )}
                </div>
            </div>

        </nav>
    )
}

export default Navbar;