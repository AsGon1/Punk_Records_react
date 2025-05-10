// Query para buscar los mangas por titulo
let mangaByTitle = `
    query ($search: String!) {
      Page {
        media(search: $search, isAdult: false, type: MANGA) {
            id
            title {
                romaji
                english
                native
            }
            format
            status
            startDate {
                year
            }
            coverImage {
                large
            }
            description
            genres
            chapters
            volumes
        }
      }
    }
`;


// Query para buscar los animes por titulo
let animeByTitle = `
    query ($search: String!) {
      Page {
        media(search: $search, isAdult: false, type: ANIME) {
            id
            title {
                romaji
                english
                native
            }
            format
            status
            startDate {
                year
            }
            coverImage {
                large
            }
            description
            episodes
            duration
            genres
        }
      }
    }
`;


// Query para obtener los personajes por el nombre
let characterByName = `
    query ($search: String!){
      Page{
        characters(search: $search) {
            id
            name {
                first
                last
            }
            age
            gender
            image{
                large
                medium
            }
            description(asHtml: true)
            dateOfBirth {
                day
                month
            }
        }
      }
    }
`;

// Esta query nos permite buscar por ID, pero no se puede especificar el formato por que los IDs no dependen de ello
let queryById = `
query ($id: Int!) {
  Page {
    media(id: $id, isAdult: false) {
        id
        type
        title {
            romaji
            english
            native
        }
        format
        status
        startDate {
            year
        }
        coverImage {
            extraLarge
        }
        description
        genres
        chapters
        volumes
        episodes
        duration
        characters(sort: [ROLE, RELEVANCE, ID]) {
            nodes {
                image {
                    large
                    medium
                    }
                name {
                    first
                    last
                    alternative
                }
            }
        }
    }
  }
}`;

// Esta query obtiene los diez mangas más leidos según la API de Anilist
let topTenManga = `
    query Media {
        Page(page: 1, perPage: 10) {
            media(sort: POPULARITY_DESC, type: MANGA) {
                id
                title {
                    romaji
                    english
                    native
                }
                format
                status
                startDate {
                    year
                }
                coverImage {
                    large
                }
                description
                genres
                chapters
                volumes
            }
        }
    }
`;

// Esta query nos permite obtener los diez animes más vistos según la API de Anilist
let topTenAnime = `
    query Media {
        Page(page: 1, perPage: 10) {
            media(sort: POPULARITY_DESC, type: ANIME) {
                id
                title {
                    romaji
                    english
                    native
                }
                format
                status
                startDate {
                    year
                }
                coverImage {
                    large
                }
                description
                episodes
                duration
                genres
            }
        }
    }
`;

// Esta Query nos permite buscar por titulo y los filtros agregados(tipo, generos y popularidad)
const GET_MEDIA_BY_FILTER = `
    query Query(
        $search: String!
        $page: Int
        $perPage: Int
        $type: MediaType
        $sort: [MediaSort]
        $genreIn: [String]
    ) {
        Page(page: $page, perPage: $perPage) {
            media(search: $search, isAdult: false, type: $type, sort: $sort, genre_in: $genreIn) {
                id
                title {
                    romaji
                    english
                    native
                }
                format
                status
                startDate {
                    year
                }
                coverImage {
                    large
                }
                description
                genres
                chapters
                volumes
                episodes
                duration
            }
            pageInfo{
                currentPage
                lastPage
                perPage
                hasNextPage
                total
            }
        }
    }
`;

// Esta Query nos permite buscar los filtros agregados(tipo, generos y popularidad)
const GET_MEDIA_BY_FILTER_NO_SEARCH = `
    query Query(
        $page: Int
        $perPage: Int
        $type: MediaType
        $sort: [MediaSort]
        $genreIn: [String]
    ) {
        Page(page: $page, perPage: $perPage) {
            media(isAdult: false, type: $type, sort: $sort, genre_in: $genreIn) {
                id
                title {
                    romaji
                    english
                    native
                }
                format
                status
                startDate {
                    year
                }
                coverImage {
                    large
                }
                description
                genres
                chapters
                volumes
                episodes
                duration
            }
            pageInfo{
                currentPage
                lastPage
                perPage
                hasNextPage
                total
            }
        }
    }
`;

// Esta query nos permite buscar por temporada
const GET_ANIME_UPCOMING_SEASON = `
    query Page(
        $page: Int
        $perPage: Int
        $type: MediaType
        $status: MediaStatus
        $season: MediaSeason
        $seasonYear: Int
        $sort: [MediaSort]
    ) {
        Page(page: $page, perPage: $perPage) {
            media(
                type: $type
                status: $status
                season: $season
                seasonYear: $seasonYear
                sort: $sort
            ) {
                id
                title {
                    romaji
                    english
                    native
                }
                format
                status
                startDate {
                    day
                    month
                    year
                }
                coverImage {
                    large
                }
                description
                genres
            }
        }
    }
`;

export {
    mangaByTitle,
    animeByTitle,
    characterByName,
    queryById,
    topTenManga,
    topTenAnime,
    GET_MEDIA_BY_FILTER,
    GET_MEDIA_BY_FILTER_NO_SEARCH,
    GET_ANIME_UPCOMING_SEASON
}