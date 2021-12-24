import {Component} from 'react'
import Slider from 'react-slick'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import './index.css'
import ReactSliderImages from '../ReactSliderImages'

class ReactSlider extends Component {
  state = {
    bestOffers: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBestOffers()
  }

  getBestOffers = async () => {
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const offersUrl = 'https://apis.ccbp.in/restaurants-list/offers'
    const response = await fetch(offersUrl, options)
    const data = await response.json()
    const offers = data.offers.map(each => ({
      imageUrl: each.image_url,
      id: each.id,
    }))

    this.setState({
      bestOffers: offers,
      isLoading: false,
    })
  }

  render() {
    const {bestOffers, isLoading} = this.state
    const settings = {
      dots: true,
    }
    return (
      <div className="container">
        {isLoading ? (
          <div className="loader-container" testid="restaurants-offers-loader">
            <Loader type="ThreeDots" color="blue" height="50" width="50" />
          </div>
        ) : (
          <Slider {...settings}>
            {bestOffers.map(each => (
              <ReactSliderImages offerDetails={each} key={each.id} />
            ))}
          </Slider>
        )}
      </div>
    )
  }
}
export default ReactSlider
