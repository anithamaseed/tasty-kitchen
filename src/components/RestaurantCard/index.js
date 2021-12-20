import {Link} from 'react-router-dom'
import './index.css'

const RestaurantCard = props => {
  const {details} = props
  const {id, name, imageUrl, menuType, userRating} = details
  const {rating, totalReviews} = userRating
  return (
    <Link to={`/restaurants-list/${id}`}>
      <div className="restaurant-card-container">
        <div className="restaurant-card-image">
          <img
            src={imageUrl}
            alt="restaurant-logo"
            className="restaurant-logo"
          />
        </div>
        <div className="restaurant-card-content">
          <h1 className="restaurant-card-name">{name}</h1>
          <p className="restaurant-card-menu-type">{menuType}</p>
          <div className="rating-and-review">
            <img
              src="https://res.cloudinary.com/anitha/image/upload/v1639719678/7_Rating_oiaxof.png"
              alt="star"
              className="star"
            />
            <p className="restaurant-card-rating">{rating}</p>
            <p className="restaurant-card-total-reviews">
              ({totalReviews} ratings)
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default RestaurantCard
