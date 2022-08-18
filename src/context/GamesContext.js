import { createContext, useState, useEffect } from 'react'

const GamesContext = createContext()

export const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([])
  const [favorites, setFavorites] = useState([])

  //  funzione FetchApi per salvare dati da Api
  const fetchApi = async () => {
    const response = await fetch('/api/games?platform=pc')

    const data = await response.json()

    setGames(data)
  }
  // Chiamare funzione FetchApi
  useEffect(() => {
    fetchApi()
  }, [])

  // Salvare dati nel LocaleStorage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('favorites'))
    if (items) {
      setFavorites(items)
    }
  }, [])

  // Funzione per salvare i dati nel LocalStorage
  const saveToLocalStorage = (items) => {
    localStorage.setItem('favorites', JSON.stringify(items))
  }

  // Aggiungi alla lista Preferiti
  const addFavoriteGames = (game) => {
    const check = favorites.filter((favorite) => favorite.id != game.id)
    const newFavoriteGames = [...check, game]
    setFavorites(newFavoriteGames)
    saveToLocalStorage(newFavoriteGames)
  }

  // Rimuovi dalla lista Preferiti
  const removeFavoriteGames = (game) => {
    const newFavoriteGames = favorites.filter((favorite) => favorite.id != game.id)
    setFavorites(newFavoriteGames)
    saveToLocalStorage(newFavoriteGames)
  }

  return (
    <GamesContext.Provider
      value={{
        games,
        favorites,
        removeFavoriteGames,
        addFavoriteGames,
      }}
    >
      {children}
    </GamesContext.Provider>
  )
}

export default GamesContext
