import React from 'react'
import styled from 'styled-components'
import CenterPage from './common/CenterPage'

export default styled(CenterPage)`
  .mention-page {
    &__content {
      width: 100%;
    }
    &__inner {
      width: 100%;
      min-height: 200px;
      padding: 50px;
      box-sizing: border-box;
      text-align: right;
    }
    &__my-list {
      margin-bottom: 30px;
    }
    &__button {
      margin: 50px 10px 0 10px;
    }
  }
`
