import {Component} from 'react'

import './index.css'

class EachRestaurantFoodDetails extends Component {
  state = {isAddButtonClicked: false, itemsCount: 0}

  addItemsToCart = () => {
    const {eachFoodDetails} = this.props
    const {itemsCount} = this.state
    const item = {...eachFoodDetails, itemsCount}
    const stringifiedCartList = localStorage.getItem('cartData')
    const cartData = JSON.parse(stringifiedCartList)
    let updatedCartList = []
    if (cartData === null) {
      updatedCartList = [item]
    } else {
      const filteredData = cartData.filter(
        eachItemData => eachItemData.id !== eachFoodDetails.id,
      )
      updatedCartList = [...filteredData, item]
    }
    localStorage.setItem('cartData', JSON.stringify(updatedCartList))
    console.log(updatedCartList)
  }

  removeItemsFromCart = () => {
    const {eachFoodDetails} = this.props
    const stringifiedCartList = localStorage.getItem('cartData')
    const cartData = JSON.parse(stringifiedCartList)
    const filteredData = cartData.filter(
      eachItemData => eachItemData.id !== eachFoodDetails.id,
    )
    const updatedCartList = [...filteredData]
    localStorage.setItem('cartData', JSON.stringify(updatedCartList))
  }

  onClickAddButton = () => {
    this.setState(
      {isAddButtonClicked: true, itemsCount: 1},
      this.addItemsToCart,
    )
  }

  onClickDecreaseItems = () => {
    const {itemsCount} = this.state
    if (itemsCount > 1) {
      this.setState(
        prevState => ({
          itemsCount: prevState.itemsCount - 1,
        }),
        this.addItemsToCart,
      )
    } else {
      this.setState(
        {isAddButtonClicked: false, itemsCount: 0},
        this.removeItemsFromCart,
      )
    }
  }

  onClickIncreaseItems = () => {
    this.setState(
      prevState => ({itemsCount: prevState.itemsCount + 1}),
      this.addItemsToCart,
    )
  }

  render() {
    const {isAddButtonClicked, itemsCount} = this.state
    const {eachFoodDetails} = this.props
    const {name, rating, cost, imageUrl} = eachFoodDetails
    return (
      <li className="restaurant-food-container" testid="foodItem">
        <div className="restaurant-card-image">
          <img
            src={imageUrl}
            alt="restaurant-logo"
            className="restaurant-logo"
          />
        </div>
        <div className="restaurant-card-content">
          <h1 className="restaurant-card-name">{name}</h1>
          <div className="cost-rating">
            <p className="restaurant-food-cost">₹ {cost}</p>
            <div className="rating-and-review">
              <img
                src="https://res.cloudinary.com/anitha/image/upload/v1639719678/7_Rating_oiaxof.png"
                alt="star"
                className="star"
              />
              <p className="restaurant-card-rating">{rating}</p>
            </div>
          </div>

          {isAddButtonClicked ? (
            <div className="add-sub-view">
              <button
                type="button"
                onClick={this.onClickDecreaseItems}
                testid="decrement-count"
              >
                -
              </button>
              <p testid="active-count" className="food-count">
                {itemsCount}
              </p>
              <button
                type="button"
                onClick={this.onClickIncreaseItems}
                testid="increment-count"
              >
                +
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="add-btn"
              onClick={this.onClickAddButton}
            >
              ADD
            </button>
          )}
        </div>
      </li>
    )
  }
}

export default EachRestaurantFoodDetails
