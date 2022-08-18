import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Favorite from './components/Favorite'
import { GamesProvider } from './context/GamesContext'

function App() {
  return (
    <GamesProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Routes>
      </Router>
    </GamesProvider>
  )
}

export default App
