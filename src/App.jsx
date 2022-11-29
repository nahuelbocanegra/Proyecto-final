import { useState } from 'react'
import './App.css'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import Purchases from "./pages/Purchases"
import NavBar from './componentes/NavBar'
import LoadingScree from './componentes/LoadingScree'
import { useSelector } from 'react-redux';
import ProtectedRoutes from './componentes/ProtectedRoutes'

function App() {
  const isLoading=useSelector(state=>state.isLoadingSlice)
 
  return (
    <div className="App">
      <HashRouter>
        <NavBar></NavBar>
        {isLoading && <LoadingScree></LoadingScree>}

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/Login" element={<Login></Login>} />
          
          <Route path="/Products/:id" element={<Products></Products>} />
          <Route element={<ProtectedRoutes></ProtectedRoutes>}>
            <Route path="/Purchases" element={<Purchases></Purchases>} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
