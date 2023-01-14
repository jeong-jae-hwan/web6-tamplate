import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

//
export default function SelectField(props) {
  const {
    children,
    shape,
    type,
    tab,
    label,
    important,
    isActive,
    onClick,
    width,
    maxWidth,
    minWidth,
    m_maxWidth,
    m_minWidth,
    margin,
    fontSize,
    key,
    css,
  } = props

  //styled
  const FieldStyled = styled.div`
    width: ${width ? width : '100%'};
    height: auto;
    max-width: ${maxWidth};
    min-width: ${minWidth};
    margin: ${margin};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      max-width: ${m_maxWidth};
      min-width: ${m_minWidth};
    }
  `

  const LineStyled = styled.div`
    width: 100%;
    height: ${({ height }) => (height ? height : 'auto')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;

    select {
      width: 100%;
      height: 100%;
      -webkit-appearance: none; /* for chrome */
      -moz-appearance: none; /*for firefox*/
      appearance: none;
      font-size: ${fontSize ? fontSize : '0.938rem'};
      padding: 8px 0 8px;
    }

    select option[value=''][disabled] {
      display: none;
    }

    input {
      width: 100%;
      font-size: ${fontSize ? fontSize : '0.938rem'};
      padding: 8px 0 8px;
    }

    button {
      width: auto;
      white-space: nowrap;
      font-size: 0.813rem;
      color: ${isActive ? '#c2c2c2' : '#1F8DFF'};
      font-weight: 500;
      padding: 0.6em;
    }

    span {
      width: auto;
      white-space: nowrap;
      padding: 0.6em;
      font-size: 0.813rem;
      color: #aaa;
    }
  `

  const BoxStyled = styled.div`
    width: 100%;
    height: ${({ height }) => (height ? height : 'auto')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding-right: ${type === 'select' && '8px'};

    select {
      width: 100%;
      height: 100%;
      -webkit-appearance: none; /* for chrome */
      -moz-appearance: none; /*for firefox*/
      appearance: none;
      font-size: ${fontSize ? fontSize : '0.938rem'};
      padding: 12px 0 12px 10px;
    }

    select option[value=''][disabled] {
      display: none;
    }

    input {
      height: auto;
      width: 100%;
      padding: 12px 0 12px 12px;
      font-size: ${fontSize ? fontSize : '0.938rem'};
    }

    button {
      width: auto;
      white-space: nowrap;
      font-size: 0.813rem;
      color: ${isActive ? '#c2c2c2' : '#1F8DFF'};
      font-weight: 500;
      padding: 0.6em 0.8em;
    }

    span {
      width: auto;
      white-space: nowrap;
      font-size: 0.813rem;
      padding: 0.6em 0.8em;
      color: #aaa;
    }
  `

  return (
    <FieldStyled>
      {label && (
        <label css={labelStyled}>
          {label} <span className={important && 'important'}>{important}</span>
        </label>
      )}

      {/* 기본형 라인 타입 인풋 */}
      {!shape && (
        <LineStyled key={key} css={css}>
          {type === 'date' && <CalenderIcon shape={shape} />}
          {children}
          {type === 'select' && <SelectIcon />}
          {tab && (
            <button type="button" onClick={onClick}>
              {tab}
            </button>
          )}
        </LineStyled>
      )}

      {/* 박스 타입 인풋 */}
      {shape === 'box' && (
        <BoxStyled key={key} css={css}>
          {type === 'date' && <CalenderIcon shape={shape} />}
          {children}
          {type === 'select' && <SelectIcon />}
          {tab && (
            <button type="button" onClick={onClick}>
              {tab}
            </button>
          )}
        </BoxStyled>
      )}
    </FieldStyled>
  )
}

//styled
const labelStyled = css`
  width: 100%;
  font-size: 0.813rem;
  color: #666;
  display: flex;
  column-gap: 0.308em;
  white-space: nowrap;
  margin-bottom: 0.308em;

  .important {
    font-size: 0.975rem;
    color: #fc4848;
  }

  span {
    white-space: nowrap;
    color: #4baafc;
  }
`

// 달력아이콘
const CalenderIcon = ({ shape }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      css={css`
        margin-right: ${(!shape || shape === 'line') && '10px'};
        margin-left: ${shape === 'box' && '12px'};
      `}
    >
      <g id="calendar-icon" transform="translate(-1 -1)">
        <path
          id="패스_18206"
          data-name="패스 18206"
          d="M8.237,5.406a.692.692,0,0,1-.692-.692V1.692a.692.692,0,1,1,1.385,0V4.714A.692.692,0,0,1,8.237,5.406Z"
          transform="translate(-2.014)"
          fill="#bababa"
        />
        <path
          id="패스_18207"
          data-name="패스 18207"
          d="M19.147,5.406a.692.692,0,0,1-.692-.692V1.692a.692.692,0,0,1,1.385,0V4.714A.692.692,0,0,1,19.147,5.406Z"
          transform="translate(-5.371)"
          fill="#bababa"
        />
        <path
          id="패스_18208"
          data-name="패스 18208"
          d="M1,14.356v5.715A3.042,3.042,0,0,0,4.039,23.11H15.961A3.042,3.042,0,0,0,19,20.071V14.356Z"
          transform="translate(0 -4.11)"
          fill="#bababa"
        />
        <path
          id="패스_18209"
          data-name="패스 18209"
          d="M19,9.533V6.221a3.042,3.042,0,0,0-3.039-3.039h-.108v2.2a2.077,2.077,0,0,1-4.154,0v-2.2H8.3v2.2a2.077,2.077,0,0,1-4.154,0v-2.2H4.039A3.042,3.042,0,0,0,1,6.221V9.533Z"
          transform="translate(0 -0.671)"
          fill="#bababa"
        />
      </g>
    </svg>
  )
}

// Selectdrop 아이콘
const SelectIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="7"
      viewBox="0 0 12 7"
    >
      <path
        id="select-icon"
        d="M6,0l6,7H0Z"
        transform="translate(12 7) rotate(180)"
        fill="#ccc"
      />
    </svg>
  )
}
