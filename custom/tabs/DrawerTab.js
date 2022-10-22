import { css } from '@emotion/react'

//svg
import DrawerIcon from 'public/icons/drawer-icon.svg'

//
export default function DrawerTab(props) {
  const { onClick, width, height, fill, m_width, m_height } = props

  return (
    <div
      css={`
        padding: 5px 2px;
      `}
    >
      <button
        onClick={onClick}
        css={`
          width: ${width};
          height: ${height};
          //
          display: flex;
          justify-content: center;
          align-items: center;
          //
          user-select: none;
          transition: 0.3s ease-in-out;

          @media only screen and (max-width: 768px) {
            width: ${m_width};
            height: ${m_height};
          }
        `}
      >
        <DrawerIcon fill={fill} width={width} height={height} />
      </button>
    </div>
  )
}
