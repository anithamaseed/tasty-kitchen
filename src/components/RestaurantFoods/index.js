import {Component} from 'react'

import Cookies from 'js-cookie'

import Header from '../Header'
import EachRestaurantDetails from '../EachRestaurantDetails'
import EachRestaurantFoodDetails from '../EachRestaurantFoodDetails'
import Footer from '../Footer'

import './index.css'

class RestaurantFoods extends Component {
  state = {
    restaurantLogoData: [],
    restaurantFoodData: [],
    isAddButtonClicked: false,
  }

  componentDidMount() {
    this.getRestaurantFoodData()
  }

  getRestaurantFoodData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedRestaurantLogoData = {
        rating: fetchedData.rating,
        id: fetchedData.id,
        name: fetchedData.name,
        costForTwo: fetchedData.cost_for_two,
        cuisine: fetchedData.cuisine,
        imageUrl: fetchedData.image_url,
        reviewsCount: fetchedData.reviews_count,
        opensAt: fetchedData.opens_at,
        location: fetchedData.location,
        itemsCount: fetchedData.items_count,
        foodItems: fetchedData.food_items,
      }
      const updatedRestaurantFoodsData = updatedRestaurantLogoData.foodItems.map(
        eachFood => ({
          name: eachFood.name,
          rating: eachFood.rating,
          id: eachFood.id,
          cost: eachFood.cost,
          foodType: eachFood.food_type,
          imageUrl: eachFood.image_url,
        }),
      )
      this.setState({
        restaurantLogoData: updatedRestaurantLogoData,
        restaurantFoodData: updatedRestaurantFoodsData,
      })
      console.log(updatedRestaurantFoodsData)
    }
  }

  render() {
    const {
      restaurantLogoData,
      restaurantFoodData,
      isAddButtonClicked,
    } = this.state
    return (
      <>
        <Header />
        <EachRestaurantDetails restaurantLogoData={restaurantLogoData} />
        {restaurantFoodData.map(eachFoodDetails => (
          <EachRestaurantFoodDetails
            key={eachFoodDetails.id}
            eachFoodDetails={eachFoodDetails}
            isAddButtonClicked={isAddButtonClicked}
          />
        ))}
        <Footer />
      </>
    )
  }
}
export default RestaurantFoods
