import React, { useEffect, useRef } from 'react'

//style
import { css } from '@emotion/react'

//atom
import { snackbarAtom } from 'atoms/modal-atom'
import { useRecoilState } from 'recoil'

//custom
import CancelTab from 'custom/tab-icons/fill/cancel-tab'

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
        <CancelTab style={cancelStyled} onClick={() => setIsSnackBar(false)} />

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
