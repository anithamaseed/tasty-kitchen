import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0

      return (
        <div className="cart-list">
          {cartList.map(eachCartItem => {
            totalAmount =
              eachCartItem.cost * eachCartItem.itemsCount + totalAmount
            return (
              <div>
                <CartItem
                  key={eachCartItem.id}
                  cartItemDetails={eachCartItem}
                />
              </div>
            )
          })}
          <hr className="h-line" />
          <div className="order-section">
            <p className="order-total">Order Total : </p>
            <p className="order-total">₹ {totalAmount}.00</p>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
