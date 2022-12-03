import React from 'react'

//styles
import { css } from '@emotion/react'

//
export default function Footer() {
  return (
    <footer css={footerStyled}>
      <div className="wrap">FOOTER</div>
    </footer>
  )
}

//styled
const footerStyled = css`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eee;

  .wrap {
    width: 100%;
    max-width: 1260px;
    display: flex;
    flex-direction: column;
    padding: 60px 20px;

    @media (max-width: 1080px) {
      padding: 50px 20px;
    }
  }
`
