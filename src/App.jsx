import { useState } from 'react'

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Browser from './pages/browser/Browser';

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
      <Browser/>
    </>
  )
}

export default App
