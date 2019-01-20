import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export default styled(props =>
  <Typography
    variant="h2"
    component="h2"
    {...props}
  />)`
    && {
      margin-bottom: 50px;
      font-weight: 400;
    }
  `