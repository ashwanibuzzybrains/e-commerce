/* eslint-disable react/destructuring-assignment */
import React from "react";
import { connect } from "react-redux";
// import {fetchPostsAndUsers} from '../actions'
// import UserHeader from './userHeader'
import Navbar from "../Navbar";
import ProductCard from "../ProductCard";
import "./index.css";

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <h1 className="home-heading mt-3 mb-3">All Products</h1>
      <ul className="ul-container">
        {props.allProducts.map((item) => (
          <ProductCard key={item.title} productData={item} />
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  allProducts: state.addToCart,
});

export default connect(mapStateToProps)(Home);
