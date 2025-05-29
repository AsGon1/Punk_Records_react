import { getToken } from "../localstorage";

const BASE_URL = "http://localhost:3010/api";
//const BASE_URL =import.meta.env.VITE_BACKEND_URL;

async function fetchData(route,method="GET",data=null){
    const url = BASE_URL + route;
    const token =  getToken();
    const options = {
        method : method,
        headers: {
            "Content-Type" : "application/json"
        },
    };

    if(token){
        options.headers["Authorization"] = `Bearer ${token}`;
    }

    if(data){
        options.body = JSON.stringify(data)
    }

    const response  = await fetch(url,options);
    const responseData = await response.json();

    if(!response.ok){
        responseData.status = response.status;
    }
    return responseData;
}

export default fetchData;