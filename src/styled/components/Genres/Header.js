import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export default styled(props =>
  <Typography
    variant="h6"
    {...props}
  />)`
    && {
      text-align: left;
      margin: 0 10px;
      color: #555;
    }
  `
