import React from 'react'
import styled from 'styled-components'

const TextBox = styled.input`
  padding: 0.5rem 1rem;
  line-height: 1.5;
  display: block;
  width: 100%;
  border: 1px solid #e2d8f0;
  border-radius: 0.25rem;
  appearance: none;
  &:focus {
    outline: 0;
    /* box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5) !important; */
  }
`
export default TextBox
