import './index.css'

const Counter = props => {
  const {activePage, onDecrementPageNumber, onIncrementPageNumber} = props

  const onDecrement = () => {
    onDecrementPageNumber()
  }

  const onIncrement = () => {
    onIncrementPageNumber()
  }

  return (
    <div className="counter-container">
      <button type="button" onClick={onDecrement} className="counter-button">
        <img
          src="https://res.cloudinary.com/anitha/image/upload/v1639479932/Icon_pfumxj.png"
          alt="decrease"
        />
      </button>
      <p className="page-count">{activePage} of 4</p>
      <button type="button" onClick={onIncrement} className="counter-button">
        <img
          src="https://res.cloudinary.com/anitha/image/upload/v1639479986/Icon_v18uoy.png"
          alt="increase"
        />
      </button>
    </div>
  )
}

export default Counter
