import './App.scss'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './pages/Home/HomePage'
import CardPage from './pages/Cart/CardPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Category/:id' element={<CategoryPage/>}/>
        <Route path='/Cart' element={<CardPage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  )
}

export default App
