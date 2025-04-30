import { removeToken } from '../../utils/localStorage';
import { useState, useEffect } from "react";
import './Navbar.css';


function Navbar ({onRouteChange, userAvatar}){

    const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);

    const handleLogout = ()=>{
        removeToken();
        onRouteChange("home");
    }

    const handleOpenOptions = () => {
        setIsBurgerMenuOpened(!isBurgerMenuOpened);
    };

    return (
        <nav>
            <div className="menu__logo">
                <a href="index.html">
                    <p id="logo-header">PUNK RECORDS</p>
                </a>
            </div>
            <div className="menu__burger">
                <ul className="menu__burger-links" id="nav-apartados">
                    <li className="menu__burger-link">
                        <button onClick={()=>onRouteChange("home")}>Home</button>
					</li>
                    <li className="menu__burger-link">
                        <button onClick={()=>onRouteChange("browser")}>Browser</button>
					</li>
                    {!userAvatar ?(
                        <li className="menu__burger-link">
                            <button onClick={()=>onRouteChange("login")}>Login</button>
					    </li>
                    ):(
                        <li className={"nav-item "}>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    )}
					<li className="menu__burger-link">
                        <button className="user__avatar" onClick={()=>onRouteChange("user")}>
                            {userAvatar ? (
                                <img src={userAvatar} alt="user avatar" />
                            ) : (
                                <AccountCircleIcon fontSize="large" /> //Todo instalar mui
                            )}
                        </button>
					</li>
                </ul>

                <div className="menu__burger-icon" id="burger_icon">
                    <button onClick={() => handleOpenOptions()}>
                        {isBurgerMenuOpened ? (
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