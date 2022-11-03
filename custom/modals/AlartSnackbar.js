import React, { useEffect, useRef } from 'react'

//style
import { ThemeProvider } from '@emotion/react'
import { SnackbarWrap, Snackbar } from 'scss/modal-styled/Snackbar'
import { IconTab } from 'scss/tab-styled/IconTab'

//svg
import TabIcon from 'public/icons/x-tab-icon.svg'

//
export default function AlartSnackbar(props) {
  const { isActive, isCancel, children } = props
  const theme = {
    mobile: '600px',
  }

  // 모달 고정 및 외부 클릭감지
  const ref = useRef()
  const clickModalOutside = event => {
    if (isActive && !ref.current?.contains(event.target)) {
      isCancel()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside)
    return () => {
      document.removeEventListener('mousedown', clickModalOutside)
    }
  }, [isActive])

  return (
    <ThemeProvider theme={theme}>
      <SnackbarWrap isActive={isActive} ref={ref}>
        <Snackbar>
          <IconTab
            position="absolute"
            top="10px"
            right="10px"
            width="22px"
            onClick={isCancel}
          >
            <TabIcon fill="#ddd" width="22px" height="22px" />
          </IconTab>
          {children}
        </Snackbar>
      </SnackbarWrap>
    </ThemeProvider>
  )
}
