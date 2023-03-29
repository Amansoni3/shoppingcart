import React from 'react'
import Product from "../components/Product"


const Home = () => {
  return (
    <div>
        <h1>Welcome to the Redux Toolkit store</h1>
        <section>
            <h3>Products</h3>
            <Product/>
        </section>
    </div>
  )
}

export default Home