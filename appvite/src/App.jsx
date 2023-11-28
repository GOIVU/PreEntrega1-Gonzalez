//CAMBIOS

import { useState, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/NavBar'

import data from './components/Data/productos.json'

export default function App() {

  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState([true])
  

  useEffect(() => {
  const promise = new Promise( (resolve, reject) =>{
    setTimeout(() =>{
      resolve(data)
    }, 5000)
  })
  
  promise.then((data) =>{
    setProducto(resp)
  })
  .finally(() => {
    setLoading(false)
  })
}, [])

console.log([producto])

  return (
    <>
      <NavBar/>
        <ItemListContainer greeting="hgdgbdgd"/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<> NO </>}/>
          <Route path='*' element={<>404</>}/>
        </Routes>
      </BrowserRouter>
    </> 
  )
}


