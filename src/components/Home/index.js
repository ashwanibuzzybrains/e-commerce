/* eslint-disable react/destructuring-assignment */
import React from 'react'
import {connect} from 'react-redux'
// import {fetchPostsAndUsers} from '../actions'
// import UserHeader from './userHeader'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase/firebase';
import Navbar from '../Navbar'
import ProductCard from '../ProductCard'
import './index.css'

const Home = props => {
  
  const addToFirestore = ()=>{
    
    const productData = collection(db,'cartData')
    props.allProducts.map(async (eachProduct) => {
      await addDoc(productData , {
        brand: eachProduct.brand,
        count:0,
        imageUrl: eachProduct.imageUrl,
        isCart: false,
        price:eachProduct.price,
        quantity:eachProduct.quantity,
        title:eachProduct.title
      })
    })  
  } 
 
  return (
    <div>
      <Navbar />
      <h1 className="home-heading mt-3 mb-3">All Products</h1>
      <button onClick = {addToFirestore} >CLICK HERE</button>
      <ul className="ul-container">
        {props.allProducts.map(item => (
          <ProductCard key={item.title} productData={item} />
        ))}
      </ul>
    </div>
  )
}
const mapStateToProps = state => ({
  allProducts: state.addToCart,
})

export default connect(mapStateToProps)(Home)
