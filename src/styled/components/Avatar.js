import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'
import PropTypes from 'prop-types'

const size = ({ large }) => large ? '100px' : '50px'

const StyledAvatar = styled(({ large, ...props }) =>
  <Avatar
    {...props}
  />)`
    && {
      width: ${size};
      height: ${size};
    }
  `

StyledAvatar.defaultProps = {
  large: false
}

StyledAvatar.propTypes = {
  large: PropTypes.bool
}

export default StyledAvatar