import React, { useEffect, useRef } from 'react'

//style
import { ThemeProvider } from '@emotion/react'
import { SnackbarWrap, Snackbar } from 'scss/modal-styled/Snackbar'
import { IconTab } from 'scss/tab-styled/IconTab'

//svg
import TabIcon from 'public/icons/x-tab-icon.svg'

//atom
import { snackbarAtom } from 'atoms/modal'
import { useRecoilState } from 'recoil'

//
export default function AlartSnackbar({ children }) {
  const theme = {
    mobile: '600px',
  }

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

  return (
    <ThemeProvider theme={theme}>
      <SnackbarWrap isActive={isSnackBar} ref={ref}>
        <Snackbar>
          <IconTab
            position="absolute"
            top="8px"
            right="8px"
            width="22px"
            onClick={() => setIsSnackBar(false)}
          >
            <TabIcon fill="#ddd" />
          </IconTab>
          {children}
        </Snackbar>
      </SnackbarWrap>
    </ThemeProvider>
  )
}
