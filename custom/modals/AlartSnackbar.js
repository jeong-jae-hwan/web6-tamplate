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
export default function AlartSnackbar({ children, isActive }) {
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

    svg {
      width: 20px;
      height: 20px;
      fill: #cecece;
    }
  `

  return (
    <ThemeProvider theme={{ mobile: '600px' }}>
      <SnackbarWrap isActive={isSnackBar} ref={ref}>
        <div css={snackbarStyled}>
          <button css={tabStyled}>
            <TabIcon fill="#ccc" />
          </button>

          <View flexStart padding="20px">
            {children}
          </View>
        </div>
      </SnackbarWrap>
    </ThemeProvider>
  )
}
