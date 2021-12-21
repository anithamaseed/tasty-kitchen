import {Component} from 'react'

import CartContext from '../../context/CartContext'

import Header from '../Header'
import CartListView from '../CartListView'
import Footer from '../Footer'

import './index.css'

class Cart extends Component {
  state = {placeOrderClicked: false}

  render() {
    const {placeOrderClicked} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const onClickPlaceOrder = () => {
            this.setState({placeOrderClicked: true})
          }
          const onClickForHomePage = () => {
            const {history} = this.props
            history.replace('/')
          }

          return (
            <>
              <Header />
              {placeOrderClicked ? (
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
                    onClick={onClickForHomePage}
                  >
                    Go To Home Page
                  </button>
                </div>
              ) : (
                <div>
                  <h1 className="cart-heading">My Cart</h1>
                  <CartListView cartList={cartList} />
                  <div className="place-order-btn-section">
                    <button
                      type="button"
                      className="place-order-btn"
                      onClick={onClickPlaceOrder}
                    >
                      Place Order
                    </button>
                  </div>
                  <Footer />
                </div>
              )}
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Cart
