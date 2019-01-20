import React from 'react'
import styled from 'styled-components'

export default styled.article`
  && {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: #ffd200;
    
    > .content {
        text-align: center;
        margin: auto;
        display: flex;
        flex-direction: column;
        padding: 50px 100px;
        box-sizing: border-box;
    }
  }
`
