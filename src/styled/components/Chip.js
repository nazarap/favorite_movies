import React from 'react'
import styled from 'styled-components'
import Chip from '@material-ui/core/Chip'
import PropTypes from 'prop-types'

const StyledChip = styled(({ ...props }) =>
  <Chip
    {...props}
  />)`
    && {
      margin: 5px;
    }
  `

StyledChip.defaultProps = {}

StyledChip.propTypes = {}

export default StyledChip