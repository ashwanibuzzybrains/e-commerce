/* eslint-disable react/destructuring-assignment */
import './index.css'
import {connect} from 'react-redux'
import {addToCart} from '../../actions'

const ProductCard = props => {
  const {productData} = props
  const {title, brand, imageUrl, rating, price, quantity, count} = productData
  const changeEverything = () => {
    props.addToCart(productData)
  }

  return (
    <li className="product-item">
      <img src={imageUrl} alt="product" className="thumbnail" />
      <h1 className="title">{title}</h1>
      <p className="brand">by {brand}</p>
      <div className="product-details">
        <p className="price">Rs {price}/-</p>
        <p className="price">Quantity - {quantity - count}</p>
      </div>
      <button
        // eslint-disable-next-line react/destructuring-assignment
        onClick={changeEverything}
        className="btn btn-primary mt-2"
        type="button"
      >
        ADD TO CART
      </button>
    </li>
  )
}
const mapStateToProps = state => ({
  allProducts: state.allProducts,
})
export default connect(mapStateToProps, {addToCart})(ProductCard)
