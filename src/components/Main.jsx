import { useContext } from 'react'
import GamesContext from '../context/GamesContext'
import { FaHeart } from 'react-icons/fa'
import { FaMinusCircle } from 'react-icons/fa'
import StarRating from './StarRating'

function Main() {
  const { games, addFavoriteGames, removeFavoriteGames } = useContext(GamesContext)
  return (
    <div className="container">
      <div className="gamelist">
        {games.map((game) => (
          <div className="card" key={game.id}>
            <img src={game.thumbnail} />
            <div className="overlay">
              <div className="overlay-header">
                <FaHeart onClick={() => addFavoriteGames(game)} size="25" color="red" />
                <FaMinusCircle
                  onClick={() => {
                    removeFavoriteGames(game)
                  }}
                  size="25"
                />
              </div>
              <div className="overlay-content">
                <div>
                  <h4>{game.title}</h4>
                  <p>{game.short_description}</p>
                </div>

                <StarRating game={game} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main
