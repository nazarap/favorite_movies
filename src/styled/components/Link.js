import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default styled(props =>
  <Link
    {...props}
  />)`
    && {
      text-decoration: none;
    }
  `