import { useState } from 'react'
import AnimeList from './components/anime/AnimeList';
import './App.css'

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

    let variables ={
        id: 106863
    };

  return (
    <>
      <AnimeList query={query} variables={variables}/>
    </>
  )
}

export default App
