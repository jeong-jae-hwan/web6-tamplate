import React from 'react'
import { css } from '@emotion/react'

//
export default function Checkbox(props) {
  const {
    mediaMobile,
    children,
    id,
    checked,
    value,
    onChange,
    onClick,
    ref,
    size,
    fontSize,
    fontWeight,
    color,
    gap,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    m_marginTop,
    m_marginBottom,
    m_marginLeft,
    m_marginRight,
    m_fontSize,
    m_size,
  } = props

  return (
    <div
      ref={ref}
      onClick={onClick}
      css={`
        width: ${({ width }) => (width ? width : '100%')};
        //
        display: flex;
        align-items: center;
        column-gap: ${gap ? gap : '10px'};
        //
        margin-top: ${marginTop};
        margin-bottom: ${marginBottom};
        margin-left: ${marginLeft};
        margin-right: ${marginRight};
        //
        cursor: pointer;
        //
        transition: 0.3s ease-in-out;

        //
        input {
          width: ${size ? size : '20px'};
          height: ${size ? size : '20px'};
          min-width: ${size ? size : '20px'};
          min-height: ${size ? size : '20px'};
          //
          border: 0px solid gainsboro;
          border-radius: 100px;
          //
          appearance: none;
          //
          background-color: #eee;
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
          //
          user-select: none;
          //
          transition: 0.2s ease-in-out;
        }

        input:checked {
          border-color: transparent;
          background-size: 100% 100%;
          background-position: 50%;
          background-repeat: no-repeat;
          background-color: #333;
        }

        label {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          //
          font-size: ${fontSize ? fontSize : '0.938rem'};
          font-weight: ${fontWeight};
          color: ${color ? color : '#555'};
          //
          cursor: pointer;
          user-select: none;
          transition: 0.3s ease-in-out;
        }

        @media only screen and (max-width: ${mediaMobile
            ? mediaMobile
            : '768px'}) {
          margin-top: ${m_marginTop};
          margin-bottom: ${m_marginBottom};
          margin-left: ${m_marginLeft};
          margin-right: ${m_marginRight};

          //
          input {
            width: ${m_size ? m_size : '18px'};
            height: ${m_size ? m_size : '18px'};
            min-width: ${m_size ? m_size : '18px'};
            min-height: ${m_size ? m_size : '18px'};
          }
          //

          label {
            font-size: ${m_fontSize ? m_fontSize : '0.938rem'};
          }
        }
      `}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}
