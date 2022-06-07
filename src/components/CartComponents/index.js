/* eslint-disable react/destructuring-assignment */
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { connect } from "react-redux";
import {
  increaseCartItem,
  decreaseCartItem,
  delteCartItem,
} from "../../actions";
import {
  doc,
  updateDoc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

import "./index.css";

const CartComponents = (props) => {
  const { cartItemDetails, changeData } = props;

  const {
    id,
    count,
    title,
    brand,
    quantity,
    price,
    imageUrl,
    isCart,
  } = cartItemDetails;

  let returnCartItem = async () => {
    const eachData = query(
      collection(db, "cartData"),
      where("title", "==", `${title}`)
    );

    let itemId = "";
    const querySnapshot = await getDocs(eachData);
    querySnapshot.forEach((doc) => {
      itemId = doc.id;
    });
    const cartItem = doc(db, "cartData", itemId);
  };

  const onClickDecrement = async () => {
    const eachData = query(
      collection(db, "cartData"),
      where("title", "==", `${title}`)
    );

    let itemId = "";
    const querySnapshot = await getDocs(eachData);
    querySnapshot.forEach((doc) => {
      itemId = doc.id;
    });
    const cartItem = doc(db, "cartData", itemId);
    const updatedData = {
      count: count - 1,
    };
    if (count !== 1) {
      await updateDoc(cartItem, updatedData);
      changeData();
    } else {
      onRemoveCartItem();
    }
  };
  const onClickIncrement = async () => {
    const eachData = query(
      collection(db, "cartData"),
      where("title", "==", `${title}`)
    );

    let itemId = "";
    const querySnapshot = await getDocs(eachData);
    querySnapshot.forEach((doc) => {
      itemId = doc.id;
    });
    const cartItem = doc(db, "cartData", itemId);
    const updatedData = {
      count: count + 1,
    };
    await updateDoc(cartItem, updatedData);
    changeData();
  };
  const onRemoveCartItem = async () => {
    const eachData = query(
      collection(db, "cartData"),
      where("title", "==", `${title}`)
    );

    let itemId = "";
    const querySnapshot = await getDocs(eachData);
    querySnapshot.forEach((doc) => {
      itemId = doc.id;
    });
    const cartItem = doc(db, "cartData", itemId);
    await deleteDoc(cartItem);
    changeData();
  };
  const totalPrice = price * count;

  return (
    <li className="cart-item">
      <img className="cart-product-image" src={imageUrl} alt={title} />
      <div className="cart-item-details-container">
        <div className="cart-product-title-brand-container">
          <p className="cart-product-title">{title}</p>
          <p className="cart-product-brand">by {brand}</p>
        </div>
        <div className="cart-quantity-container">
          <button
            type="button"
            className="quantity-controller-button"
            testid="minus"
            onClick={onClickDecrement}
          >
            <BsDashSquare color="#52606D" size={12} />
          </button>
          <p className="cart-quantity">{count}</p>
          <button
            type="button"
            className="quantity-controller-button"
            testid="plus"
            onClick={onClickIncrement}
          >
            <BsPlusSquare color="#52606D" size={12} />
          </button>
        </div>
        <div className="total-price-remove-container">
          <p className="cart-total-price">Rs {totalPrice}/-</p>
          <button
            className="remove-button"
            type="button"
            onClick={onRemoveCartItem}
          >
            Remove
          </button>
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={onRemoveCartItem}
        testid="remove"
      >
        <AiFillCloseCircle color="#616E7C" size={20} />
      </button>
    </li>
  );
};
const mapStateToProps = (state) => ({
  allProducts: state.addToCart,
});

export default connect(mapStateToProps, {
  increaseCartItem,
  decreaseCartItem,
  delteCartItem,
})(CartComponents);
