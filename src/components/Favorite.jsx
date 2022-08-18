import { FaMinusCircle } from 'react-icons/fa'
import StarRating from './StarRating'
import { useContext } from 'react'
import GamesContext from '../context/GamesContext'

function Favorite() {
  const { favorites, removeFavoriteGames } = useContext(GamesContext)
  return favorites.length > 0 ? (
    <div className="container">
      <div className="gamelist">
        {favorites.map((game) => (
          <div className="card" key={game.id}>
            <img src={game.thumbnail} />
            <div className="overlay">
              <div className="overlay-header">
                <FaMinusCircle onClick={() => removeFavoriteGames(game)} size="25" />
              </div>
              <div className="overlay-content">
                <h4>{game.title}</h4>
                <p>{game.short_description}</p>
                <StarRating />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="no-games">
      <h3>Non ci sono giochi sulla tua lista</h3>
    </div>
  )
}

export default Favorite
