import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useState, useEffect } from 'react'

function StarRating() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(null)

  useEffect(() => {
    const storeGame = JSON.parse(localStorage.getItem('ratings'))
    if (storeGame) {
      setRating(storeGame)
    }
  }, [])

  const saveToLocalStorage = (item) => {
    localStorage.setItem('ratings', JSON.stringify(item))
  }
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1
        return (
          <label key={index} className="star-rating">
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue)
                saveToLocalStorage(ratingValue)
              }}
            />
            <FaStar className="star" color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} />
          </label>
        )
      })}
    </div>
  )
}

export default StarRating
