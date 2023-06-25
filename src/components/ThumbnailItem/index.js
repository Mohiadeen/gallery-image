import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const activeClassName = isActive ? 'active' : 'inActive'

  const onChangeImage = () => {
    setThumbnail(id)
  }

  return (
    <li className="list-item">
      <button className="btn" type="button" onClick={onChangeImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
