import React from 'react'
import PropTypes from 'prop-types'
import Photos from './Photos'

class Media extends React.Component {
  render () {
    if (this.props.media && this.props.media.length > 0) {
      switch (this.props.media[0].type) {
        case 'photo':
          return <Photos {... this.props} />
        default:
          return <div />
      }
    } else {
      return <div />
    }
  }
}

Media.propTypes = {
  'media': PropTypes.array
}

Media.defaultProps = {
  'media': [{'type': ''}]
}

Media.displayName = 'Media'

export default Media
