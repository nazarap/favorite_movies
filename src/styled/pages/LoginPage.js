import React from 'react'
import styled from 'styled-components'
import CenterPage from './common/CenterPage'

export default styled(CenterPage)`
  .login-page {
    &__content {
      width: 30%;
      min-height: 70%;
    }
    &__input {
      margin: 10px 0;
    }
    &__button {
      display: block;
      margin: auto;
    }
    &__registration {
      margin: 10px 0;
      font-size: 1rem;
      font-weight: 400;
    }
  }
`
