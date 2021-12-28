import {Component} from 'react'

import './index.css'

class CartItem extends Component {
  state = {cartItemsCount: 0}

  componentDidMount() {
    const {cartItemDetails} = this.props
    const {itemsCount} = cartItemDetails
    this.setState({cartItemsCount: itemsCount})
  }

  addItemsToCart = () => {
    const {cartItemDetails} = this.props
    const {cartItemsCount} = this.state
    const item = {...cartItemDetails, cartItemsCount}
    const stringifiedCartList = localStorage.getItem('cartData')
    const cartData = JSON.parse(stringifiedCartList)
    let updatedCartList = []
    if (cartData === null) {
      updatedCartList = [item]
    } else {
      const filteredData = cartData.filter(
        eachItemData => eachItemData.id !== cartItemsCount.id,
      )
      updatedCartList = [...filteredData, item]
    }
    localStorage.setItem('cartData', JSON.stringify(updatedCartList))
    console.log(updatedCartList)
  }

  removeItemsFromCart = () => {
    const {cartItemDetails} = this.props
    const stringifiedCartList = localStorage.getItem('cartData')
    const cartData = JSON.parse(stringifiedCartList)
    const filteredData = cartData.filter(
      eachItemData => eachItemData.id !== cartItemDetails.id,
    )
    const updatedCartList = [...filteredData]
    localStorage.setItem('cartData', JSON.stringify(updatedCartList))
  }

  onClickDecreaseCount = () => {
    const {cartItemsCount} = this.state
    if (cartItemsCount > 1) {
      this.setState(
        prevState => ({
          cartItemsCount: prevState.cartItemsCount - 1,
        }),
        this.addItemsToCart,
      )
    } else {
      this.setState({cartItemsCount: 0}, this.removeItemsFromCart)
    }
  }

  onClickIncreaseCount = () => {
    this.setState(
      prevState => ({cartItemsCount: prevState.cartItemsCount + 1}),
      this.addItemsToCart,
    )
  }

  render() {
    const {cartItemsCount} = this.state
    const {cartItemDetails} = this.props
    const {name, cost, imageUrl} = cartItemDetails
    const totalPrice = cost * cartItemsCount

    return (
      <div className="cart-item" testid="cartItem">
        <img className="cart-product-image" src={imageUrl} alt={name} />
        <div className="cart-item-details-container">
          <p className="cart-product-title">{name}</p>
          <div className="add-sub-view">
            <button
              type="button"
              onClick={this.onClickDecreaseCount}
              testid="decrement-count"
            >
              -
            </button>
            <p testid="active-count" className="food-count">
              {cartItemsCount}
            </p>

            <button
              type="button"
              onClick={this.onClickIncreaseCount}
              testid="increment-count"
            >
              +
            </button>
          </div>
          <p className="cart-total-price">₹ {totalPrice}/-</p>
        </div>
      </div>
    )
  }
}

export default CartItem
