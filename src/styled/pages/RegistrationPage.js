import React from 'react'
import styled from 'styled-components'
import CenterPage from './common/CenterPage'

export default styled(CenterPage)`
  .reg-page {
    &__content {
      width: 60%;
      min-height: 75%;
    }
    &__avatar {
      margin: 0 auto 20px auto;
    }
    &__input {
      margin: 10px 0;
      width: 100%;
    }
    &__button {
      margin-top: 50px;
    }
    &__login {
      margin: 10px 0;
      font-size: 1rem;
      font-weight: 400;
    }
  }
`