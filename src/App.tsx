import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home_page'
import AboutPage from './pages/about_page'
import './App.css'
import NavBar from './components/navbar'

function App() {
  return (
    <>
      <NavBar/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </>
  )
}

export default App
