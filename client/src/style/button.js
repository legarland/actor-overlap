import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: #fff;
  padding: 0.5rem 1rem;
  font-weight: 700;
  border-bottom: 4px solid #2b6cb0;
  border-radius: 0.25rem;
  background-color: #4299e1;
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
export default Button
