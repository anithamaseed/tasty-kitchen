import CartItem from '../CartItem'

import './index.css'

const CartListView = () => {
  const stringifiedCartList = localStorage.getItem('cartData')
  const cartData = JSON.parse(stringifiedCartList)
  let totalAmount = 0

  return (
    <div className="cart-list">
      {cartData.map(eachCartItem => {
        totalAmount = eachCartItem.cost * eachCartItem.itemsCount + totalAmount
        return (
          <div>
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          </div>
        )
      })}
      <hr className="h-line" />
      <div className="order-section">
        <p className="order-total">Order Total : </p>
        <p testid="total-price" className="order-total">
          ₹ {totalAmount}.00
        </p>
      </div>
    </div>
  )
}

export default CartListView
