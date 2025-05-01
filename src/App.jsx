import { useState } from 'react'
import AnimeList from './components/anime/AnimeList';
import MangaList from './components/manga/MangaList';
import Top10Animes from './components/pages/homePage/Top10Animes';
//import './App.css'

function App() {

  let query = `
      query ($id: Int!) {
        Page {
          media(id: $id, isAdult: false) {
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
              chapters
              volumes
              episodes
              duration
          }
        }
      }`;

  let query7 = `
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

    let variables ={
        id: 106863
    };

  return (
    <>
      <Top10Animes query={query7}/>
    </>
  )
}

export default App
