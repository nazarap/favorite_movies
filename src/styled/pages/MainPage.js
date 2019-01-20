import React from 'react'
import styled from 'styled-components'
import ContentPage from './common/ContentPage'

export default styled(ContentPage)`
  && {
    .main-page {
      &__content {
        text-align: left;
      }
      &__search {
        margin: 0 50px 50px 50px;
        width: 30%;
      }
    }
  }
`