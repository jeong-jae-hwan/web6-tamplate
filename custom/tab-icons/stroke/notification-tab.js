import { css } from '@emotion/react'
import React from 'react'

export default function NotificationTab(props) {
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
        <g id="notification-icon" transform="translate(-44 -302)">
          <rect
            id="사각형_4396"
            data-name="사각형 4396"
            width={size}
            height={size}
            transform="translate(44 302)"
            fill="none"
            opacity="0"
          />
          <g id="notification-bell" transform="translate(39.749 297.5)">
            <path
              id="패스_17573"
              data-name="패스 17573"
              d="M23.71,18.772a2.2,2.2,0,0,1-.371-1.226V12.567a8.089,8.089,0,0,0-16.177,0v4.979a2.2,2.2,0,0,1-.371,1.226l-.92,1.381A2.2,2.2,0,0,0,7.72,23.567h3.856a3.768,3.768,0,0,0,7.349,0h3.856a2.2,2.2,0,0,0,1.85-3.415Zm-8.459,6.262a2.253,2.253,0,0,1-2.122-1.467h4.244A2.253,2.253,0,0,1,15.251,25.034Zm8.155-3.306a.7.7,0,0,1-.624.372H7.72a.7.7,0,0,1-.624-.372.731.731,0,0,1,.031-.774l.92-1.381a3.632,3.632,0,0,0,.615-2.028V12.567a6.413,6.413,0,0,1,3.247-5.71,6.72,6.72,0,0,1,6.683,0,6.413,6.413,0,0,1,3.247,5.71v4.979a3.637,3.637,0,0,0,.615,2.028l.921,1.381A.733.733,0,0,1,23.406,21.728Z"
              transform="translate(0 0)"
              fill={fill ? fill : 'current'}
            />
          </g>
        </g>
      </svg>
    </button>
  )
}
