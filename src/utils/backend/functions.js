import fetchData from "./fetch.js";

async function createUser(userData){
    const response = await fetchData("/register","POST",userData);
    return response;
}

export {
    createUser
}