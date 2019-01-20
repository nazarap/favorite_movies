import React from 'react'
import styled from 'styled-components'
import CenterPage from './common/CenterPage'

export default styled(CenterPage)`
  .about-page {
    &__content {
      width: 80%;
      min-height: 50%;
      margin: auto;
      padding: 50px;
      box-sizing: border-box;
    }
    &__text {
      &--description {
        margin: 40px 0;
        color: #555;
      }
    }
    &__button {
      outline: none;
      margin: 0 10px;
    }
  }
`