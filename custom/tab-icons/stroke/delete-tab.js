import { css } from '@emotion/react'
import React from 'react'

export default function DeleteTab(props) {
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
        id="그룹_95320"
        data-name="그룹 95320"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 16"
      >
        <rect
          id="사각형_4410"
          data-name="사각형 4410"
          width={size}
          height={size}
          transform="translate(0 0.347)"
          fill="none"
          opacity="0"
        />
        <g id="그룹_94771" data-name="그룹 94771" transform="translate(0.415)">
          <path
            id="패스_87182"
            data-name="패스 87182"
            d="M12.006,14.7a.583.583,0,0,0,.582-.582V8.2a.582.582,0,0,0-1.164,0v5.915a.583.583,0,0,0,.582.582"
            transform="translate(-2.317 -2.129)"
            fill={fill ? fill : 'current'}
          />
          <path
            id="패스_87183"
            data-name="패스 87183"
            d="M7.244,14.7a.583.583,0,0,0,.582-.582V8.2a.582.582,0,1,0-1.164,0v5.915a.583.583,0,0,0,.582.582"
            transform="translate(-1.351 -2.129)"
            fill={fill ? fill : 'current'}
          />
          <path
            id="패스_87184"
            data-name="패스 87184"
            d="M14.987,2.126H11.114V.558a.579.579,0,0,0-.6-.558H5.138a.579.579,0,0,0-.6.558V2.126H.6a.579.579,0,0,0-.6.558.58.58,0,0,0,.6.558H1.51V13.389a2.553,2.553,0,0,0,.856,1.861A2.912,2.912,0,0,0,4.338,16h6.947a2.74,2.74,0,0,0,2.788-2.682V3.242h.914a.58.58,0,0,0,.6-.558.579.579,0,0,0-.6-.558M5.735,1.116H9.921v1.01H5.735Zm7.141,12.2c0,.024,0,.051,0,.08a1.592,1.592,0,0,1-1.636,1.488H4.294a1.678,1.678,0,0,1-1.143-.478A1.469,1.469,0,0,1,2.7,13.311V3.242H12.875Z"
            transform="translate(0.001 0)"
            fill={fill ? fill : 'current'}
          />
        </g>
      </svg>
    </button>
  )
}
