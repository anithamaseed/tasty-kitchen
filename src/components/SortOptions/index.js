import './index.css'

const SortOptions = props => {
  const {option} = props
  const {displayText, value} = option

  return (
    <option className="sort-option" value={value}>
      {displayText}
    </option>
  )
}
export default SortOptions
