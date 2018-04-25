import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Selected Image component.
 * Display an image.
 */
class SelectedImage extends Component {
  render() {
    const { imageUrl, imageText } = this.props.image

    return (
      <div className="vtex-product-image__selected-image dn di-ns">
        <img className="mw-100 mh-100" src={imageUrl} alt={imageText} />
      </div>
    )
  }
}

SelectedImage.propTypes = {
  /** Image to be displayed */
  image: PropTypes.shape({
    /** URL of the image */
    imageUrl: PropTypes.string.isRequired,
    /** Text that describes the image */
    imageText: PropTypes.string.isRequired,
  }).isRequired,
}

export default SelectedImage
