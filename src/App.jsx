import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/product/Product'
import Description from './components/description/Description'

function App() {
  

  return (
    <>
     <div className='container'>
      <Product />
      <Description />
     </div>
    </>
  )
}

export default App
