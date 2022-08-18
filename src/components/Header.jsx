import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">GameList</Link>
          </div>
          <div className="favorite">
            <Link to="/favorite">La mia lista</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
