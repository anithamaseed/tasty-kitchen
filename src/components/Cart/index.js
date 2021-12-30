import {Component} from 'react'

import {Link} from 'react-router-dom'

import Header from '../Header'
import CartItem from '../CartItem'
import Footer from '../Footer'

import './index.css'

class Cart extends Component {
  state = {placeOrderClicked: false, cartList: [], activeLink: 'cart'}

  componentDidMount() {
    const stringifiedCartList = localStorage.getItem('cartData')
    const cartData = JSON.parse(stringifiedCartList)
    this.setState({cartList: cartData})
  }

  onClickPlaceOrder = () => {
    this.setState({placeOrderClicked: true})
  }

  renderEmptyCartView = () => (
    <div className="empty-cart">
      <img
        src="https://res.cloudinary.com/anitha/image/upload/v1640346346/OBJECTS_pvnaht.png"
        alt="empty cart"
      />
      <h1 className="empty-cart-heading">No Orders Yet!</h1>
      <p className="empty-cart-content">
        Your cart is empty. Add something from the menu.
      </p>
      <Link to="/">
        <button type="button" className="home-page-btn">
          Order Now
        </button>
      </Link>
    </div>
  )

  renderPlaceOrderView = () => (
    <div className="order-success-container">
      <img
        src="https://res.cloudinary.com/anitha/image/upload/v1640078649/Vector_1_rradpt.png"
        alt="success"
        className="success"
      />
      <h1 className="payment-successful">Payment Successful</h1>
      <p className="payment-content">
        Thank you for ordering <br />
        Your payment is successfully completed.
      </p>
      <button
        type="button"
        className="home-page-btn"
        onClick={this.onClickForHomePage}
      >
        Go To Home Page
      </button>
    </div>
  )

  onChangeCartList = updatedCartList => {
    this.setState({cartList: updatedCartList})
  }

  renderCartItemsView = () => {
    const {cartList} = this.state
    let totalAmount = 0
    return (
      <div>
        <h1 className="cart-heading">My Cart</h1>
        <ul className="cart-list">
          {cartList.map(eachCartItem => {
            totalAmount =
              eachCartItem.cost * eachCartItem.itemsCount + totalAmount
            return (
              <div>
                <CartItem
                  key={eachCartItem.id}
                  cartItemDetails={eachCartItem}
                  onChangeCartList={this.onChangeCartList}
                />
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
        </ul>
        <div className="place-order-btn-section">
          <button
            type="button"
            className="place-order-btn"
            onClick={this.onClickPlaceOrder}
          >
            Place Order
          </button>
        </div>
        <Footer />
      </div>
    )
  }

  render() {
    const {placeOrderClicked, cartList, activeLink} = this.state

    return (
      <>
        <Header active={activeLink} />
        {cartList.length === 0 ? (
          this.renderEmptyCartView()
        ) : (
          <div>
            {placeOrderClicked
              ? this.renderPlaceOrderView()
              : this.renderCartItemsView()}
          </div>
        )}
      </>
    )
  }
}

export default Cart
