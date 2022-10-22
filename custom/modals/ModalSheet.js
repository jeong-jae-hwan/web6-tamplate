import { useEffect } from 'react'

//style
import { LayerBlur } from 'scss/layout-styled/LayerBlur'
import { Sheet } from 'scss/modal-styled/Sheet'

//custom_styles
import IconTab from 'custom/tabs/IconTab'

//svg
import TabIcon from 'public/icons/x-tab-icon.svg'

//
export default function ModalSheet(props) {
  const { isActive, isCancel, children } = props

  // 모달 고정 핸들러
  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [isActive])

  return (
    <>
      <LayerBlur isActive={isActive} />
      <Sheet isActive={isActive}>
        <IconTab
          position="absolute"
          top="14px"
          right="14px"
          width="26px"
          onClick={isCancel}
        >
          <TabIcon fill="#ddd" width="25px" height="25px" />
        </IconTab>
        {children}
      </Sheet>
    </>
  )
}
