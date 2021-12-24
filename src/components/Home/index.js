import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import ReactSlider from '../ReactSlider'
import RestaurantCard from '../RestaurantCard'
import Counter from '../Counter'
import Footer from '../Footer'
import SortOptions from '../SortOptions'

import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Lowest',
    value: 'Lowest',
  },
  {
    id: 1,
    displayText: 'Highest',
    value: 'Highest',
  },
]

class Home extends Component {
  state = {
    restaurantList: [],
    activeOption: sortByOptions[0].value,
    activePage: 1,
    isLoaded: false,
  }

  componentDidMount() {
    this.getRestaurantsList()
  }

  getRestaurantsList = async () => {
    const {activeOption, activePage} = this.state
    const limit = 9
    const offset = (activePage - 1) * limit
    const restaurantsListUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${activeOption}`
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(restaurantsListUrl, options)
    const data = await response.json()
    const updatedRestaurantsList = data.restaurants.map(each => ({
      costForTwo: each.cost_for_two,
      cuisine: each.cuisine,
      groupByTime: each.group_by_time,
      hasOnlineDelivery: each.has_online_delivery,
      hasTableBooking: each.has_table_booking,
      id: each.id,
      imageUrl: each.image_url,
      isDeliveryNow: each.is_delivering_now,
      location: each.location,
      menuType: each.menu_type,
      name: each.name,
      opensAt: each.opens_at,

      userRating: {
        rating: each.user_rating.rating,
        ratingColor: each.user_rating.rating_color,
        ratingText: each.user_rating.rating_text,
        totalReviews: each.user_rating.total_reviews,
      },
    }))
    this.setState({restaurantList: updatedRestaurantsList, isLoaded: true})
  }

  onChangeSortOption = event => {
    this.setState({activeOption: event.target.value}, this.getRestaurantsList)
  }

  onDecrementPageNumber = () => {
    const {activePage} = this.state

    if (activePage > 1) {
      this.setState(
        prevState => ({activePage: prevState.activePage - 1}),
        this.getRestaurantsList,
      )
    }
  }

  onIncrementPageNumber = () => {
    const {activePage} = this.state

    if (activePage < 4) {
      this.setState(
        prevState => ({activePage: prevState.activePage + 1}),
        this.getRestaurantsList,
      )
    }
  }

  renderLoadingView = () => (
    <div
      className="loader-container-restaurants-list"
      testid="restaurants-list-loader"
    >
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

  renderRestaurantsView = () => {
    const {restaurantList, activePage} = this.state
    return (
      <div className="home-container">
        <div className="home-content-container">
          <h1 className="home-heading">Popular Restaurants</h1>
          <p className="home-content">
            Select Your favourite restaurant special dish and make your day
            happy...
          </p>
          <div className="dropdown-section">
            <img
              className="sort-by-icon"
              src="https://res.cloudinary.com/anitha/image/upload/v1639376317/sort_gwdzku.png"
              alt="sort"
            />
            <p className="sort-heading">Sort by </p>
            <select
              className="dropdown sort-heading"
              onChange={this.onChangeSortOption}
            >
              {sortByOptions.map(each => (
                <SortOptions option={each} key={each.id} />
              ))}
            </select>
          </div>
          <div testid="restaurant-item">
            {restaurantList.map(eachList => (
              <RestaurantCard details={eachList} key={eachList.id} />
            ))}
          </div>
        </div>
        <Counter
          activePage={activePage}
          onDecrementPageNumber={this.onDecrementPageNumber}
          onIncrementPageNumber={this.onIncrementPageNumber}
        />
      </div>
    )
  }

  render() {
    const {isLoaded} = this.state
    return (
      <>
        <Header />
        <ReactSlider />
        {isLoaded ? this.renderRestaurantsView() : this.renderLoadingView()}
        <Footer />
      </>
    )
  }
}

export default Home
