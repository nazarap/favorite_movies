import React from 'react'
import styled from 'styled-components'
import CenterPage from './CenterPage'

export default styled(CenterPage)`
  && {
    > .content {
      width: 100%;
      height: 100%;
    }
  }
`