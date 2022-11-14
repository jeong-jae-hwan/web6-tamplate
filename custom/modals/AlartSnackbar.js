import React, { useEffect, useRef } from 'react'

//style
import { ThemeProvider } from '@emotion/react'
import { css } from '@emotion/react'
import { SnackbarWrap } from 'scss/modal-styled/Snackbar'

//svg
import TabIcon from 'public/icons/x-tab-icon.svg'

//atom
import { snackbarAtom } from 'atoms/modal'
import { useRecoilState } from 'recoil'
import { View } from 'scss/layout-styled/View'

//
export default function AlartSnackbar({ children }) {
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
  const snackbarStyled = css`
    position: relative;
    width: 100%;

    background-color: #fff;
    border-radius: 14px;
    box-shadow: 0 3px 30px rgba(0, 0, 0, 0.12);
  `

  const tabStyled = css`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 2;

    svg {
      width: 20px;
      height: 20px;
      fill: #cecece;
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

  return (
    <ThemeProvider theme={{ mobile: '600px' }}>
      <SnackbarWrap isActive={isSnackBar} ref={ref}>
        <div css={snackbarStyled}>
          <button css={tabStyled} onClick={() => setIsSnackBar(false)}>
            <TabIcon fill="#ccc" />
          </button>

          <View flexStart padding="20px">
            {children ? (
              children
            ) : (
              <div css={titleBox}>
                <p>👍 요청하신 처리가 완료되었습니다!</p>
                <span>해당 팝업은 아무 곳이나 클릭해도 사라져요!</span>
              </div>
            )}
          </View>
        </div>
      </SnackbarWrap>
    </ThemeProvider>
  )
}
