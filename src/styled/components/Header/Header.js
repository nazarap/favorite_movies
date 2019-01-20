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
        justify-content: flex-end;
        
        .user-info {
          display: flex;
          align-items: center;
          
          &__name {
            color: #555;
            margin: 0 10px;
          }
        }
      }
      &__bnt {
        margin: 0 10px;
        height: 100%;
      }
    }
  `