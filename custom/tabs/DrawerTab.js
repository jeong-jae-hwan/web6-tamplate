import { css } from '@emotion/react'

//svg
import DrawerIcon from 'public/icons/drawer-icon.svg'

//
export default function DrawerTab(props) {
  const { onClick, size, m_size, fill } = props

  //styled
  const divStyled = css`
    padding: 5px 2px;

    button {
      width: ${size ? size : '28px'};
      height: ${size ? size : '28px'};
      //
      display: flex;
      justify-content: center;
      align-items: center;
      //
      user-select: none;
      transition: 0.3s ease-in-out;

      svg {
        width: 100%;
        width: 100%;
        fill: ${fill};
        transition: 0.3s ease-in-out;
      }

      @media (max-width: 768px) {
        width: ${m_size ? m_size : `24px`};
        height: ${m_size ? m_size : `24px`};
      }
    }
  `

  return (
    <div css={divStyled}>
      <button onClick={onClick}>
        <DrawerIcon />
      </button>
    </div>
  )
}
