import { css } from '@emotion/react'
import React from 'react'

export default function DrawerTab(props) {
  const { onClick, size, fill, style } = props

  return (
    <button
      type="button"
      onClick={onClick}
      className={style}
      css={css`
        display: none;
        justify-content: center;
        width: 28px;
        max-width: 28px;

        svg {
          fill: ${fill};
        }

        @media (max-width: 768px) {
          display: flex;
          width: 25px;
          max-width: 25px;
        }
      `}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
        <g id="drawer-icon" transform="translate(-82 -14)">
          <rect
            id="사각형_8344"
            data-name="사각형 8344"
            width={size ? size : '22'}
            height={size ? size : '22'}
            transform="translate(82 14)"
            fill="none"
            opacity="0"
          />
          <g
            id="drawer-icon-2"
            data-name="drawer-icon"
            transform="translate(-1664 -12.5)"
          >
            <rect
              id="사각형_8379"
              data-name="사각형 8379"
              width="20"
              height="2.3"
              rx="1.15"
              transform="translate(1747 29)"
              fill="#e0e0e0"
            />
            <rect
              id="사각형_8380"
              data-name="사각형 8380"
              width="20"
              height="2.3"
              rx="1.15"
              transform="translate(1747 36.35)"
              fill="#e0e0e0"
            />
            <rect
              id="사각형_8381"
              data-name="사각형 8381"
              width="20"
              height="2.3"
              rx="1.15"
              transform="translate(1747 43.7)"
              fill="#e0e0e0"
            />
          </g>
        </g>
      </svg>
    </button>
  )
}
