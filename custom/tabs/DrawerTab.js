import { css } from '@emotion/react'

//svg
import DrawerIcon from 'public/icons/drawer-icon.svg'

//
export default function DrawerTab(props) {
  const { onClick, size, m_size, fill } = props

  //styled
  const divStyled = css`
    padding: 5px 2px;
  `

  const tabStyled = css`
    width: ${size ? size : '24px'};
    height: ${size ? size : '24px'};
    //
    display: flex;
    justify-content: center;
    align-items: center;
    //
    user-select: none;
    transition: 0.3s ease-in-out;

    svg {
      width: ${size ? size : '24px'};
      height: ${size ? size : '24px'};
    }

    @media (max-width: 768px) {
      width: ${m_size ? m_size : `calc(${size} - 5px)`};
      height: ${m_size ? m_size : `calc(${size} - 5px)`};

      svg {
        width: ${m_size ? m_size : `calc(${size} - 5px)`};
        height: ${m_size ? m_size : `calc(${size} - 5px)`};
      }
    }
  `

  return (
    <div css={divStyled}>
      <button onClick={onClick} css={tabStyled}>
        <DrawerIcon fill={fill} />
      </button>
    </div>
  )
}
