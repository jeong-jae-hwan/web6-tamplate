import { css } from '@emotion/react'
import React from 'react'

export default function EditTab(props) {
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
        width={size}
        height={size}
        viewBox="0 0 16 16"
      >
        <g id="premium-icon-edit-3394365" transform="translate(-2 -2)">
          <path
            id="패스_17499"
            data-name="패스 17499"
            d="M16.9,9.295a.571.571,0,0,0-.571.571v5.517a1.872,1.872,0,0,1-1.869,1.87H5.013a1.872,1.872,0,0,1-1.87-1.87V5.94a1.872,1.872,0,0,1,1.87-1.869h5.517a.571.571,0,0,0,0-1.143H5.013A3.016,3.016,0,0,0,2,5.94v9.442A3.017,3.017,0,0,0,5.013,18.4h9.442a3.016,3.016,0,0,0,3.013-3.013V9.866a.571.571,0,0,0-.572-.571Z"
            transform="translate(0 -0.395)"
            fill={fill ? fill : 'current'}
          />
          <path
            id="패스_17500"
            data-name="패스 17500"
            d="M21.867,4.569l-2.4-2.4a.574.574,0,0,0-.812,0l-7.2,7.2a.574.574,0,0,0-.168.406v2.4a.574.574,0,0,0,.574.574h2.4a.574.574,0,0,0,.406-.168l7.2-7.2A.574.574,0,0,0,21.867,4.569ZM14.022,11.6H12.435V10.013l5.126-5.126,1.545,1.544c.016.016.036.021.053.035Zm5.93-5.929a.468.468,0,0,0-.035-.053L18.373,4.075l.689-.689L20.65,4.974Z"
            transform="translate(-4.035)"
            fill={fill ? fill : 'current'}
          />
        </g>
      </svg>
    </button>
  )
}
