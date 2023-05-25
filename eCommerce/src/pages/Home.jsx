import { useState } from 'react'
import '../components/products/productGrid/gridButton/GridButton'
import Hero from '../components/home/hero/Hero'
import Grid from '../components/products/productGrid/Grid'
import '../scss/index.scss'

const Home = ({ products }) => {

// Desides how many products will be shown in the grid
let [baseAmount, setBaseAmount] = useState(8);
let displayProducts = products.slice(0, baseAmount)

  return (
    <>
      <Hero />
    </>
  )
}

export default Home