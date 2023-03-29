import React, { useState, useEffect } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Product = () => {

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {

    const fetchProduts = async () => {
      const res = await fetch('http://fakestoreapi.com/products')
      const data = await res.json()
      console.log(data)

      setProducts(data)
    }

    fetchProduts()

  }, [])

  const handleAdd = (product) => {
    dispatch(add(product))
  } 

  return (
    <div className='productsWrapper'>
      {
        products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>

            <button className='btn' onClick={() => handleAdd(product)}>Add to cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Product