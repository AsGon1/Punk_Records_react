import { useState,useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login () {

    const [error,setError] = useState(null);
    const [userData,setUserData] = useState({
        email: "",
        password:""
    });
    
    const {onLogin} = useContext(AuthContext);
    
    const handleUserPassword = (e) =>{
        const newPassword = e.target.value;
        console.log("user password",newPassword)
        const newState = {...userData,password:newPassword}
        setUserData(newState);
    }

    const handleUserEmail = (e) =>{
        const newEmail = e.target.value;
        console.log("user Email",newEmail)
        const newState = {...userData,email:newEmail}
        setUserData(newState);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("login",userData);
        const result = await onLogin(userData.email,userData.password);
        setError(result);
    }

    return (
        <section className="login">
            <h1>Login</h1>

            <p className="error">{error}</p>

            <form className="login__form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id= "email" value={userData.email} onChange={handleUserEmail} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={userData.password} onChange={handleUserPassword}/>

                <button>Login</button>
            </form>

            <section className="login__register">
				<p>You haven't an account yet?</p>
				<NavLink to="/register">Register</NavLink>
			</section>

        </section>
    )
}

export default Login;