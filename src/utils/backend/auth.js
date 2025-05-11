import fetchData from "./fetch.js";

async function login(email, password){
    const data = {
        email,
        password
    }
    const result = await fetchData("/login","POST",data);
    return result;
}

async function logout(){
    const result = await fetchData("/logout","POST");
}

export {
    login,
    logout
}