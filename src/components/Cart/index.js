import {Component} from 'react'

import Header from '../Header'
import CartListView from '../CartListView'
import Footer from '../Footer'

import './index.css'

class Cart extends Component {
  state = {placeOrderClicked: false}

  onClickPlaceOrder = () => {
    this.setState({placeOrderClicked: true})
  }

  onClickForHomePage = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {placeOrderClicked} = this.state
    const stringifiedCartList = localStorage.getItem('cartData')
    const cartData = JSON.parse(stringifiedCartList)

    return (
      <>
        <Header />
        {cartData.length === 0 ? (
          <div className="empty-cart">
            <img
              src="https://res.cloudinary.com/anitha/image/upload/v1640346346/OBJECTS_pvnaht.png"
              alt="empty cart"
            />
            <h1 className="empty-cart-heading">No Orders Yet!</h1>
            <p className="empty-cart-content">
              Your cart is empty. Add something from the menu.
            </p>
            <button
              type="button"
              className="home-page-btn"
              onClick={this.onClickForHomePage}
            >
              Order Now
            </button>
          </div>
        ) : (
          <div>
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
                  onClick={this.onClickForHomePage}
                >
                  Go To Home Page
                </button>
              </div>
            ) : (
              <div>
                <h1 className="cart-heading">My Cart</h1>
                <CartListView cartData={cartData} />
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
            )}
          </div>
        )}
      </>
    )
  }
}

export default Cart
