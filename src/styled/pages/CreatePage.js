import React from 'react'
import styled from 'styled-components'
import ContentPage from './common/ContentPage'

export default styled(ContentPage)`
  .create-page {
    &__content {
      width: 30%;
      margin: auto;
      display: flex;
      flex-direction: column;
      min-height: 500px;
      text-align: center;
      padding: 50px 100px;
      box-sizing: border-box;
      justify-content: center;
    }
    &__input {
      margin: 10px 0;
    }
    &__btn {
      margin: 10px 0;
    }
    &__avatar {
      margin: auto auto 20px;
    }
  }
`
