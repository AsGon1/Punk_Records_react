
let URL = 'https://graphql.anilist.co';

//FUNCIÓN FETCH PARA OBTENER LOS DATOS DE ANILIST
async function fetchData(query,variables) {
    
    let OPTIONS = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query, //query introducida, en la parte superior tenemos las diferentes posibilidades
            variables: variables //Variables y valores utilizados en la busqueda (search, id, etc.)
        })
    };

    try {
        const response = await fetch(URL, OPTIONS).then(handleResponse)
                            .then(handleData)
                            .catch(handleError);
        return response;
    }
    catch(error) {
        console.error(error);
    }
}

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    return data;
}

function handleError(error) {
    //alert('Error, check console');
    console.error(error);
}

export default fetchData;