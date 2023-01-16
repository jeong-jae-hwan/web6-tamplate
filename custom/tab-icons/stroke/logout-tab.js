import { css } from '@emotion/react'
import React from 'react'

export default function LogoutTab(props) {
  const { onClick, size, fill, style } = props

  return (
    <button
      type="button"
      onClick={onClick}
      className={style}
      css={
        style
          ? style
          : css`
              display: flex;
              justify-content: center;
              align-items: center;
            `
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        <g id="out-icon" transform="translate(-238 -123)">
          <path
            id="패스_11210"
            data-name="패스 11210"
            d="M273.391,504.037l.007-.03h-9.27a1.512,1.512,0,0,1-1.594-1.451V488.824a1.523,1.523,0,0,1,1.6-1.454h8.991a.85.85,0,0,0,.623-.2.83.83,0,0,0,.094-1.183.855.855,0,0,0-.582-.291.7.7,0,0,0-.12,0h-9a3.288,3.288,0,0,0-3.407,3.126v13.747a3.277,3.277,0,0,0,3.292,3.123l.108,0h8.994a.839.839,0,0,0,.265-1.652Z"
            transform="translate(-22.732 -362.694)"
            fill={fill ? fill : 'current'}
          />
          <path
            id="패스_11211"
            data-name="패스 11211"
            d="M280.963,495.225a.669.669,0,0,0-.1-.094l-4.011-4.223a1,1,0,0,0-1.245,0,.72.72,0,0,0-.274.5.712.712,0,0,0,.171.536.517.517,0,0,0,.083.08l2.747,2.884-9,0a.84.84,0,0,0-.605.157.778.778,0,0,0-.312.524.8.8,0,0,0,.708.88.784.784,0,0,0,.183,0h9.022l-2.727,2.866a.717.717,0,0,0-.1,1.034.728.728,0,0,0,.1.1.968.968,0,0,0,.616.216,1.03,1.03,0,0,0,.65-.233l3.978-4.195a.711.711,0,0,0,.109-1.027Z"
            transform="translate(-23.134 -362.694)"
            fill={fill ? fill : 'current'}
          />
        </g>
      </svg>
    </button>
  )
}
