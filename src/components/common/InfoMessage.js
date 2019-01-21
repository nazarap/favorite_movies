import React from 'react'
import PropTypes from 'prop-types'
import StyledInfoMessage from './../../styled/components/InfoMessage'

const InfoMessage = ({ show, text }) =>
  show ? (
    <StyledInfoMessage
      variant="h6"
    > {text}
    </StyledInfoMessage>
  ) : null

InfoMessage.defaultProps = {
  show: false,
  text: ''
}

InfoMessage.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string
}

export default InfoMessage
