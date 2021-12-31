import {Link} from 'react-router-dom'
import './index.css'

const RestaurantCard = props => {
  const {details} = props
  const {id, name, imageUrl, cuisine, userRating} = details
  const {rating, totalReviews} = userRating
  return (
    <li testid="restaurant-item">
      <Link to={`/restaurant/${id}`} className="restaurant-card-link">
        <img src={imageUrl} alt="restaurant" className="restaurant-logo" />

        <div className="restaurant-card-content">
          <h1 className="restaurant-card-name">{name}</h1>
          <p className="restaurant-card-menu-type">{cuisine}</p>
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
      </Link>
    </li>
  )
}
export default RestaurantCard
