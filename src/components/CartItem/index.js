import './index.css'

const CartItem = props => {
  const {cartItemDetails} = props
  const {name, itemsCount, cost, imageUrl} = cartItemDetails
  const totalPrice = cost * itemsCount

  return (
    <div className="cart-item">
      <img className="cart-product-image" src={imageUrl} alt={name} />
      <div className="cart-item-details-container">
        <p className="cart-product-title">{name}</p>
        <p className="cart-total-price">₹ {totalPrice}/-</p>
      </div>
    </div>
  )
}

export default CartItem
