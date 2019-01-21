import React from 'react'
import styled from 'styled-components'

export default styled.header`
    width: 100%;
    padding: 50px 100px;
    box-sizing: border-box;
    height: 170px;
    
    .header {
      &__content {
        width: 100%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      &__bnt {
        margin: 0 10px;
      }
      &__panel {
        display: flex;
      }
    }
  `