import React from 'react'
import styled from 'styled-components'
import CenterPage from './CenterPage'

export default styled(CenterPage)`
  .acc-page {
    &__content {
      width: 100%;
      height: 100%;
    }
    &__list {
      padding: 0 50px;
      
      .movie {
        &__image {
          height: 200px;
        }
      }
    }
  }
`