import fetchData from "./anilistFetch";
import {queryById} from './queries';

async function getMediaById(id){

    let variables ={
        id: id
    };

    console.log(variables)

    const result = await fetchData(queryById, variables);
    console.log(result);
    return result.data.Page.media;
}

export {
    getMediaById
}