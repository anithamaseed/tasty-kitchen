import './index.css'

const ReactSliderImages = props => {
  const {offerDetails} = props
  const {imageUrl} = offerDetails

  return <img src={imageUrl} alt="Best offers" className="best-offer-img" />
}
export default ReactSliderImages
