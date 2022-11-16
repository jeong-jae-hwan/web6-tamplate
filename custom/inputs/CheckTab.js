import React from 'react'

//styles
import { css } from '@emotion/react'
import styled from '@emotion/styled'

//
export default function CheckTab(props) {
  const { children, labe, maxWidth } = props

  //styled
  const wrapStyled = css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 6px;
    row-gap: 6px;

    input {
      display: none;
    }

    //
    input[type='radio'] + span {
      width: 100%;
      max-width: ${maxWidth};
      //
      padding: 0.8em 1em;
      //
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 0.533em;
      //
      border: 1px solid #e2e2e2;
      border-radius: 0.8em;
      //
      font-size: 0.938rem;
      color: #aaa;
      //
      cursor: pointer;
      transition: 0.3s ease-in-out;
    }

    //
    input[type='radio']:checked + span {
      background-color: #eff1fa;
      border: 1px solid #eff1fa;
      color: #3b425c;
    }

    @media (max-width: 600px) {
      input[type='radio'] + span {
        font-size: 0.875rem;
      }
    }
  `

  return (
    <Box>
      <label>{label}</label>

      <div css={wrapStyled}>{children}</div>
    </Box>
  )
}

//styled
const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.813px;
    color: #666;
  }
`
