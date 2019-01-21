import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'

export default styled(Card)`
  .movie {
    &__image {}
    &__title {
      text-align: left;
      min-height: 70px;
      max-height: 70px;
    }
    &__action-area {
      overflow: hidden;
    }
    &__more {
      text-decoration: none;
    }
  }
`
