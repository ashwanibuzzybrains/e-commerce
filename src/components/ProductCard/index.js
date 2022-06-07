/* eslint-disable react/destructuring-assignment */
import "./index.css";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart } from "../../actions";
import { collection, addDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const ProductCard = (props) => {
  const { productData } = props;

  const {
    title,
    isCart,
    brand,
    imageUrl,
    rating,
    price,
    quantity,
    count,
  } = productData;
  const changeEverything = async () => {
    const { history } = props;
    props.addToCart(productData);
    const eachData = collection(db, "cartData");
    const querySnapshot = await getDocs(eachData);
    let result = true;
    querySnapshot.forEach((doc) => {
      if (doc.data().title === title) {
        result = false;
      }
    });
    if (result === true) {
      await addDoc(eachData, {
        brand: brand,
        count: 1,
        imageUrl: imageUrl,
        isCart: isCart,
        price: price,
        quantity: quantity,
        title: title,
      });
    }
    history.push("/cart");
  };

  return (
    <li className="product-item">
      <img src={imageUrl} alt="product" className="thumbnail" />
      <h1 className="title">{title}</h1>
      <p className="brand">by {brand}</p>
      <div className="product-details">
        <p className="price">Rs {price}/-</p>
        <p className="price">Quantity - {quantity}</p>
      </div>
      <button
        // eslint-disable-next-line react/destructuring-assignment
        onClick={changeEverything}
        className="btn btn-primary mt-2"
      >
        ADD TO CART
      </button>
    </li>
  );
};
const mapStateToProps = (state) => ({
  allProducts: state.allProducts,
});
export default connect(mapStateToProps, { addToCart })(withRouter(ProductCard));
