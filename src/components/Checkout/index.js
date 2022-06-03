/* eslint-disable react/destructuring-assignment */
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './index.css'

const Checkout = props => {
  let total = 0
  const cartList = []

  props.allProducts.forEach(i => {
    if (i.isCart === true) {
      cartList.push(i)
    }
  })
  console.log(cartList)
  cartList.forEach(eachCartItem => {
    total += eachCartItem.price * eachCartItem.count
  })
  return (
    <div className="checkout-main">
      <div className="cart-summary-container">
        <h1 className="order-total-value">
          <span className="order-total-label">Order Total:</span> Rs {total}
          /-
        </h1>
        {/* <p className="total-items">{cartList.length} Items in cart</p> */}
      </div>
      <Link to="/purchase">
        <button type="button" className="checkout-button">
          Checkout
        </button>
      </Link>
    </div>
  )
}
const mapStateToProps = state => ({
  allProducts: state.addToCart,
})

export default connect(mapStateToProps)(Checkout)
