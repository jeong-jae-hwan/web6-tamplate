import { css } from '@emotion/react'

//svg
import DrawerIcon from 'public/icons/drawer-icon.svg'

//
export default function DrawerTab(props) {
  const { onClick, width, height, fill, m_width, m_height } = props

  //styled
  const divStyled = css`
    padding: 5px 2px;
  `

  const tabStyled = css`
    width: ${width};
    height: ${height};
    //
    display: flex;
    justify-content: center;
    align-items: center;
    //
    user-select: none;
    transition: 0.3s ease-in-out;

    @media (max-width: 768px) {
      width: ${m_width};
      height: ${m_height};
    }
  `

  return (
    <div css={divStyled}>
      <button onClick={onClick} css={tabStyled}>
        <DrawerIcon fill={fill} width={width} height={height} />
      </button>
    </div>
  )
}
