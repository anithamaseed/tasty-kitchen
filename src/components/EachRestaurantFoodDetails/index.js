import {Component} from 'react'

import CartContext from '../../context/CartContext'

import './index.css'

class EachRestaurantFoodDetails extends Component {
  state = {isAddButtonClicked: false, itemsCount: 1}

  onClickAddButton = () => {
    this.setState({isAddButtonClicked: true})
  }

  renderFoodItemsOfRestaurant = () => (
    <CartContext.Consumer>
      {value => {
        const {addCartItem} = value
        const {isAddButtonClicked, itemsCount} = this.state
        const {eachFoodDetails} = this.props
        const {name, rating, cost, imageUrl} = eachFoodDetails

        const addItemsToCart = () => {
          addCartItem({...eachFoodDetails, itemsCount})
        }

        const onClickAddButton = () => {
          this.setState({isAddButtonClicked: true}, addItemsToCart)
        }

        const onClickDecreaseItems = () => {
          if (itemsCount > 1) {
            this.setState(prevState => ({
              itemsCount: prevState.itemsCount - 1,
            }))
          }
        }

        const onClickIncreaseItems = () => {
          this.setState(prevState => ({itemsCount: prevState.itemsCount + 1}))
        }

        return (
          <div className="restaurant-food-container">
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
                <button type="button" onClick={onClickDecreaseItems}>
                  -
                </button>
                <p className="food-count">{itemsCount}</p>
                <button type="button" onClick={onClickIncreaseItems}>
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
                  onClick={onClickAddButton}
                >
                  ADD
                </button>
              )}
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return <>{this.renderFoodItemsOfRestaurant()}</>
  }
}

export default EachRestaurantFoodDetails
