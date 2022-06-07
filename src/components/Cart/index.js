/* eslint-disable react/destructuring-assignment */
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import Checkout from "../Checkout";
import "./index.css";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

import CartComponents from "../CartComponents";

const EmptyCartView = () => (
  <div className="cart-empty-view-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
      className="cart-empty-img"
      alt="cart empty"
    />
    <h1 className="cart-empty-heading">Your Cart Is Empty</h1>

    <Link to="/">
      <button type="button" className="btn btn-primary ">
        Shop Now
      </button>
    </Link>
  </div>
);

const Cart = (props) => {
  const { cartList } = props;
  const [firestoreData, setFirestoreData] = useState([]);
  const [dataIsChanged, setDataisChanged] = useState(true);

  const changeData = () => {
    setDataisChanged(!dataIsChanged);
  };

  let showEmptyView;
  const checkEmpty = (cartItemDetails) => {
    if (cartItemDetails.isCart === true) {
      return false;
    }
    return true;
  };
  if (cartList === undefined) {
    showEmptyView = true;
  } else {
    showEmptyView = cartList.every((i) => checkEmpty(i));
  }

  useEffect(() => {
    const gettingFirebaseData = async () => {
      const eachData = collection(db, "cartData");
      const querySnapshot = await getDocs(eachData);
      let firestoreArray = [];

      let itemId = "";
      querySnapshot.forEach((doc) => {
        itemId = doc.id;
        firestoreArray.push(doc.data());
      });
      setFirestoreData(firestoreArray);
    };
    gettingFirebaseData();
  }, [dataIsChanged]);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        {/* {showEmptyView ? (
          EmptyCartView()
        ) : ( */}
        <>
          <div className="cart-content-container">
            <h1 className="cart-heading">My Cart</h1>
            {firestoreData.map((cartItemDetails) => (
              <CartComponents
                cartItemDetails={cartItemDetails}
                key={cartItemDetails.title}
                changeData={changeData}
              />
            ))}
          </div>
          <Checkout />
        </>
        {/* )} */}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  cartList: state.addToCart,
});

export default connect(mapStateToProps)(Cart);
