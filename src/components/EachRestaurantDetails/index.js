import './index.css'

const EachRestaurantDetails = props => {
  const {restaurantLogoData} = props
  const {
    imageUrl,
    location,
    rating,
    name,
    costForTwo,
    reviewsCount,
  } = restaurantLogoData
  return (
    <div className="restaurant-logo-container">
      <img
        src={imageUrl}
        alt="each-restaurant-logo"
        className="each-restaurant-logo"
      />
      <div className="each-restaurant-logo-content">
        <h1 className="each-restaurant-name">{name}</h1>
        <p className="restaurant-location">{location}</p>
        <div className="rating-cost">
          <div>
            <div className="rating-with-star">
              <img
                src="https://res.cloudinary.com/anitha/image/upload/v1639891674/7_Rating_cprgac.png"
                alt="star"
                className="star-icon"
              />
              <p className="star-rating">{rating}</p>
            </div>
            <p className="restaurant-location">{reviewsCount}+ Ratings</p>
          </div>
          <p className="line-height">|</p>
          <div>
            <p className="star-rating">₹ {costForTwo}</p>
            <p className="restaurant-location margin-top">cost for two</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EachRestaurantDetails
