import fetchData from "./fetch.js";

// Funciones relacionadas con el usuario
async function createUser(userData){
    const response = await fetchData("/register","POST",userData);
    return response;
}

// Funciones relacionadas con los favoritos

async function getAllFavorites(){
    const favorites = await fetchData("/favorite")
    return {...favorites, password: ""};
}

async function getFavoriteByMediaID(media_id) {
    const favorite = await fetchData(`/favorite/media/${media_id}`)
    return favorite;
}

async function createFavorite(favoriteData){
    const response = await fetchData("/favorite/create","POST",favoriteData);
    return response;
}

async function deleteFavoriteByID(id){
    const response = await fetchData(`/favorite/${id}/delete`,"DELETE")
    return response
}

async function editFavorite(favorite_id, data){
    const response = await fetchData(`/favorite/${favorite_id}`, "PUT", data);
    return response;
}

// Funciones relacionadas con las reviews del usuario

async function getAllReviews(){
    const reviews = await fetchData("/review")
    return {...reviews, password: ""};
}

async function getReviewsByMediaID(id) {
    const review = await fetchData(`/review/media/${id}`)
    return review;
}

async function getReviewByFavoriteID(id) {
    const reviews = await fetchData(`/review/favorite/${id}`)
    return reviews;
}

async function createReview(favoriteData){
    const response = await fetchData("/review/create","POST",favoriteData);
    return response;
}

async function deleteReviewByFavoriteID(id){
    const response = await fetchData(`/review/favorite/${id}/delete`,"DELETE")
    return response
}

async function editReview(reviewId,reviewData){
    const response = await fetchData("/review/"+reviewId,"PUT",reviewData);
    return response;
}

export {
    createUser,
    getAllFavorites,
    getFavoriteByMediaID,
    createFavorite,
    deleteFavoriteByID,
    editFavorite,
    getAllReviews,
    getReviewsByMediaID,
    getReviewByFavoriteID,
    createReview,
    deleteReviewByFavoriteID,
    editReview
}