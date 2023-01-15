import { css } from '@emotion/react'
import React from 'react'

export default function CancelTab(props) {
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
        width={size ? size : '24'}
        height={size ? size : '24'}
        viewBox="0 0 22 22.001"
      >
        <g
          id="그룹_96527"
          data-name="그룹 96527"
          transform="translate(-211 -322.999)"
        >
          <circle
            id="타원_1327"
            data-name="타원 1327"
            cx="11"
            cy="11"
            r="11"
            transform="translate(211 323)"
            fill="#fff"
          />
          <path
            id="xBtn"
            d="M22.92,7.364a11,11,0,1,0,0,15.556,11,11,0,0,0,0-15.556M17.358,18.649l-2.216-2.216L12.924,18.65a.913.913,0,0,1-1.291-1.291l2.218-2.218-2.213-2.213a.913.913,0,0,1,1.291-1.291l2.213,2.214,2.213-2.213a.911.911,0,0,1,1.288,1.288L16.43,15.139l2.218,2.216-.195.195.195-.195a.913.913,0,0,1-1.291,1.291"
            transform="translate(206.859 318.857)"
            fill={fill ? fill : '#ddd'}
          />
        </g>
      </svg>
    </button>
  )
}
