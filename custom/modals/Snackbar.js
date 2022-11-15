import React, { useEffect, useRef } from 'react'

//style
import { css } from '@emotion/react'
import { View } from 'scss/layout-styled/View'

//atom
import { snackbarAtom } from 'atoms/modal'
import { useRecoilState } from 'recoil'

//
export default function Snackbar({ children }) {
  // atom
  const [isSnackBar, setIsSnackBar] = useRecoilState(snackbarAtom)

  // 모달 고정 및 외부 클릭감지
  const ref = useRef()
  const clickModalOutside = event => {
    if (isSnackBar && !ref.current?.contains(event.target)) {
      setIsSnackBar(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside)
    return () => {
      document.removeEventListener('mousedown', clickModalOutside)
    }
  }, [isSnackBar])

  //styled
  const sanckbarStyled = css`
    z-index: 99999;
    //
    position: fixed;
    top: ${isSnackBar ? '0' : '-100%'};
    left: 50%;
    transform: translateX(-50%);
    //
    width: 100%;
    max-width: 500px;
    //
    display: flex;
    flex-direction: column;
    padding: 31px 20px;
    //
    opacity: ${isSnackBar ? 1 : 0};
    //
    transition: 0.2s ease-in-out;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 600px) {
      top: auto;
      bottom: ${isSnackBar ? '0' : '-100%'};
    }
  `

  return (
    <div css={sanckbarStyled} ref={ref}>
      <div css={snackbarStyled}>
        {/* tab */}
        <button
          css={cancelStyled}
          type="button"
          onClick={() => setIsSnackBar(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <g
              id="그룹_96430"
              data-name="그룹 96430"
              transform="translate(-1139 -96)"
            >
              <circle
                id="타원_1270"
                data-name="타원 1270"
                cx="12.5"
                cy="12.5"
                r="12.5"
                transform="translate(1139 96)"
                fill="#fff"
              />
              <path
                id="xBtn"
                d="M25.481,7.8a12.5,12.5,0,1,0,0,17.677,12.5,12.5,0,0,0,0-17.677m-6.32,12.824-2.519-2.519-2.52,2.52a1.038,1.038,0,0,1-1.467-1.467l2.52-2.52L12.66,14.126a1.038,1.038,0,0,1,1.467-1.467l2.515,2.516,2.515-2.515a1.035,1.035,0,0,1,1.464,1.464l-2.515,2.515,2.52,2.519-.221.221.221-.221a1.038,1.038,0,0,1-1.467,1.467"
                transform="translate(1134.858 91.858)"
                fill="current"
              />
            </g>
          </svg>
        </button>

        {/* view */}
        <div css={viewStyled}>
          {children ? (
            children
          ) : (
            <div css={titleBox}>
              <p>👍 요청하신 처리가 완료되었습니다!</p>
              <span>해당 팝업은 아무 곳이나 클릭해도 사라져요!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// styled

const snackbarStyled = css`
  position: relative;
  width: 100%;

  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.12);
`

const cancelStyled = css`
  z-index: 999;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  user-select: none;
  transition: 0.3s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
    fill: #e0e0e0;
  }
`

const titleBox = css`
  p {
    font-weight: bold;
  }

  span {
    font-size: 0.875rem;
    color: #999;
  }
`

const viewStyled = css`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
`
