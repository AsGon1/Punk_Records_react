import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { createUser } from "../../utils/backend/functions";
import { NavLink } from 'react-router-dom';

import './Register.css'

function Register() {

    // Estado que guarda los datos de usuario a registrar
    const [userData, setUserData] = useState({
        nickname: "",
        email: "",
        password: "",
    })

    const [error,setError] = useState(null);

    const navigate = useNavigate();

    const handleNickname = (e) => {
        const newName = e.target.value;
        setUserData((oldData) => {
            return { ...oldData, nickname: newName }
        })
    }

    const handleEmail = (e) => {
        const newEmail = e.target.value;
        setUserData((oldData) => {
            return { ...oldData, email: newEmail }
        })
    }

    const handlePassword = (e) => {
        const newPassword = e.target.value;
        setUserData((oldData) => {
            return { ...oldData, password: newPassword }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData)
        const response = await createUser(userData);
        console.log(response);
        if (response.error){
            console.log(response);
            setError(response.error);
        }
    }

    return (
        <section className="register">

            <h1>Register</h1>

            {error && <p className="error">{error}</p>}

            <form className="register__form" onSubmit={handleSubmit}>

                <label htmlFor="nickname">Nickname</label>
                <input type="text" name="nickname" id="nickname" onChange={handleNickname} />

                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" onChange={handleEmail} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handlePassword} />

                <button>Register</button>
            </form>
            <section className="login__register">
				<p>Do you already have an account?</p>
				<NavLink to="/login">Login</NavLink>
			</section>
        </section>

    )
}

export default Register;