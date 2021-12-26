import {Component} from 'react'

import './index.css'

class EachRestaurantFoodDetails extends Component {
  state = {isAddButtonClicked: false, itemsCount: 1}

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
      updatedCartList = [...cartData, item]
    }
    localStorage.setItem('cartData', JSON.stringify(updatedCartList))
    console.log(updatedCartList)
  }

  onClickAddButton = () => {
    this.setState({isAddButtonClicked: true}, this.addItemsToCart)
  }

  onClickDecreaseItems = () => {
    const {itemsCount} = this.state
    if (itemsCount > 1) {
      this.setState(prevState => ({
        itemsCount: prevState.itemsCount - 1,
      }))
    }
  }

  onClickIncreaseItems = () => {
    this.setState(prevState => ({itemsCount: prevState.itemsCount + 1}))
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
          {isAddButtonClicked ? (
            <button type="button" className="add-btn">
              Added To Cart
            </button>
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
