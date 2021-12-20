import Header from '../Header'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {CartList} = value
      console.log(CartList)
      return (
        <div>
          <Header />
          <ul>
            {CartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
