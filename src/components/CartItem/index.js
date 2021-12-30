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
    const {cartItemDetails, onChangeCartList} = this.props
    const {cartItemsCount} = this.state
    const item = {...cartItemDetails, itemsCount: cartItemsCount}
    const stringifiedCartList = localStorage.getItem('cartData')
    const cartData = JSON.parse(stringifiedCartList)
    const filteredItemsData = cartData.filter(
      eachItemData => eachItemData.id !== cartItemDetails.id,
    )
    const updatedCartList = [...filteredItemsData, item]
    localStorage.setItem('cartData', JSON.stringify(updatedCartList))
    onChangeCartList(updatedCartList)
  }

  removeItemsFromCart = () => {
    const {cartItemDetails, onChangeCartList} = this.props
    const stringifiedCartList = localStorage.getItem('cartData')
    const cartData = JSON.parse(stringifiedCartList)
    const filteredItemsData = cartData.filter(
      eachItemData => eachItemData.id !== cartItemDetails.id,
    )
    const updatedCartList = [...filteredItemsData]
    localStorage.setItem('cartData', JSON.stringify(updatedCartList))
    onChangeCartList(updatedCartList)
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

    return (
      <li className="desktop-cart-bg-container">
        <div className="desktop-cart-container" testid="cartItem">
          <ul className="desktop-cart-heading-list-menu">
            <li className="desktop-cart-heading-list-item">Item</li>
            <li className="desktop-cart-heading-list-quantity">Quantity</li>
            <li className="desktop-cart-heading-list-details">Price</li>
          </ul>
          <div className="cart-item">
            <div className="desktop-img-name">
              <img className="cart-product-image" src={imageUrl} alt={name} />
              <p className="desktop-cart-product-title">{name}</p>
            </div>
            <div className="cart-item-details-container">
              <p className="cart-product-title">{name}</p>
              <div className="add-sub-view">
                <button
                  type="button"
                  onClick={this.onClickDecreaseCount}
                  testid="decrement-quantity"
                >
                  -
                </button>
                <p testid="active-count" className="food-count">
                  {cartItemsCount}
                </p>

                <button
                  type="button"
                  onClick={this.onClickIncreaseCount}
                  testid="increment-quantity"
                >
                  +
                </button>
              </div>
              <p className="cart-total-price">₹ {cost * cartItemsCount}/-</p>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default CartItem
