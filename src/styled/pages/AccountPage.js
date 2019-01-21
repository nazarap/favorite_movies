import React from 'react'
import styled from 'styled-components'
import ContentPage from './common/ContentPage'

export default styled(ContentPage)`
  && {
    .acc-page {
      &__content {
        margin: 0;
      }
      &__genres {
        padding: 20px;
        box-sizing: border-box;
        margin: 0 50px 50px 50px;
        text-align: left;
      }
    }
  }
`
