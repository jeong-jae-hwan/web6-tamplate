import { css } from '@emotion/react'
import React from 'react'

export default function UploadTab(props) {
  const { type, onClick, size, fill, style } = props

  return (
    <button
      type={type ? type : 'button'}
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
        width={size}
        height={size}
        viewBox="0 0 20.001 20"
      >
        <path
          id="right"
          d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0m4.616,10.442-2.936,3.677a.768.768,0,0,1-.547.265h0a.745.745,0,0,1-.535-.225.755.755,0,0,1-.022-1.025l1.9-2.4H5.939a.743.743,0,0,1-.015-1.485H12.5l-2-2.391a.751.751,0,0,1,.011-1A.732.732,0,0,1,11.529,5.8l.04.041,3.046,3.6a.759.759,0,0,1,0,1"
          transform="translate(0 20) rotate(-90)"
          fill="#333"
        />
      </svg>
    </button>
  )
}
