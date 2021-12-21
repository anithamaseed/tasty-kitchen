import './index.css'

const CartItem = props => {
  const {cartItemDetails} = props
  const {name, rating, cost, imageUrl} = cartItemDetails

  return (
    <li>
      <img src={imageUrl} alt="food" />
      <h1>{name}</h1>
      <p>{rating}</p>
      <p>{cost}</p>
    </li>
  )
}
export default CartItem
