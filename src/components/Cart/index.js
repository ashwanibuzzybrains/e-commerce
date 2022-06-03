/* eslint-disable react/destructuring-assignment */
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import Checkout from '../Checkout'
import './index.css'

import CartComponents from '../CartComponents'

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
)

const printCart = cartItemDetails => {
  if (cartItemDetails.isCart === true) {
    return (
      <CartComponents
        cartItemDetails={cartItemDetails}
        key={cartItemDetails.title}
      />
    )
  }
  return null
}
const Cart = props => {
  const {cartList} = props
  let showEmptyView
  const checkEmpty = cartItemDetails => {
    if (cartItemDetails.isCart === true) {
      return false
    }
    return true
  }
  if (cartList === undefined) {
    showEmptyView = true
  } else {
    showEmptyView = cartList.every(i => checkEmpty(i))
  }

  return (
    <>
      <Navbar />
      <div className="cart-container">
        {showEmptyView ? (
          EmptyCartView()
        ) : (
          <>
            <div className="cart-content-container">
              <h1 className="cart-heading">My Cart</h1>
              {cartList.map(cartItemDetails => printCart(cartItemDetails))}
            </div>
            <Checkout />
          </>
        )}
      </div>
    </>
  )
}
const mapStateToProps = state => ({
  cartList: state.addToCart,
})

export default connect(mapStateToProps)(Cart)
