import { css } from '@emotion/react'
import React from 'react'

export default function AddTab(props) {
  const { onClick, fill, style } = props

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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
        <g
          id="그룹_96293"
          data-name="그룹 96293"
          transform="translate(-1835 -18)"
        >
          <circle
            id="타원_1269"
            data-name="타원 1269"
            cx="22"
            cy="22"
            r="22"
            transform="translate(1835 18)"
            fill="#f2f2f2"
          />
          <g id="그룹_96294" data-name="그룹 96294" transform="translate(1.5)">
            <rect
              id="사각형_8686"
              data-name="사각형 8686"
              width="21"
              height="3"
              rx="1.5"
              transform="translate(1857 29.5) rotate(90)"
              fill="#333"
            />
            <rect
              id="사각형_8687"
              data-name="사각형 8687"
              width="21"
              height="3"
              rx="1.5"
              transform="translate(1845 38.25)"
              fill="#333"
            />
          </g>
        </g>
      </svg>
    </button>
  )
}
