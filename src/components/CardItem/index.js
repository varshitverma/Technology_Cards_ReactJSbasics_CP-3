// Write your code here.
import './index.css'

const TechnologyCards = props => {
  const {cardsListItem} = props
  const {title, description, imgUrl, className} = cardsListItem
  console.log(title, imgUrl, className)
  return (
    <li className={`${className} card-item`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-desc">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCards
