import { css } from '@emotion/react'
import React from 'react'

export default function MemoTab(props) {
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
        viewBox="0 0 22 22"
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        <g id="memo-icon" transform="translate(-268 -365.996)">
          <path
            id="패스_87194"
            data-name="패스 87194"
            d="M16.894,0H5.109A5.114,5.114,0,0,0,0,5.109V16.891A5.106,5.106,0,0,0,5.105,22H15.278a4.886,4.886,0,0,0,3.439-1.43l1.852-1.853A4.881,4.881,0,0,0,22,15.264V5.1A5.113,5.113,0,0,0,16.894,0m3.453,16.159a3.327,3.327,0,0,1-.862,1.471l-1.851,1.852a3.328,3.328,0,0,1-1.476.862l-.127.035V17.862a1.841,1.841,0,0,1,1.831-1.832h2.521Zm.117-1.661h-2.6a3.378,3.378,0,0,0-3.368,3.365v2.6H5.109a3.58,3.58,0,0,1-3.577-3.577V5.109A3.575,3.575,0,0,1,5.106,1.533H16.891a3.575,3.575,0,0,1,3.577,3.577Z"
            transform="translate(268 365.996)"
            fill={fill ? fill : 'current'}
          />
          <g
            id="그룹_95231"
            data-name="그룹 95231"
            transform="translate(0.5 -0.246)"
          >
            <rect
              id="사각형_8373"
              data-name="사각형 8373"
              width="13"
              height="1.7"
              rx="0.85"
              transform="translate(272 372.046)"
              fill={fill ? fill : 'current'}
            />
            <rect
              id="사각형_8374"
              data-name="사각형 8374"
              width="10"
              height="1.7"
              rx="0.85"
              transform="translate(272 376.146)"
              fill={fill ? fill : 'current'}
            />
            <rect
              id="사각형_8375"
              data-name="사각형 8375"
              width="6"
              height="1.7"
              rx="0.85"
              transform="translate(272 380.246)"
              fill={fill ? fill : 'current'}
            />
          </g>
        </g>
      </svg>
    </button>
  )
}
