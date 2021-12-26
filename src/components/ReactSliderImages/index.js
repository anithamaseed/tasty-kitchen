import './index.css'

const ReactSliderImages = props => {
  const {offerDetails} = props
  const {imageUrl} = offerDetails

  return (
    <div className="best-offer-container-img">
      <img src={imageUrl} alt="offer" className="best-offer-img" />
    </div>
  )
}
export default ReactSliderImages
