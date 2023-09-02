import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Home/Navbar/Navbar'


function App() {
  
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>

    
    </>
  )
}

export default App
