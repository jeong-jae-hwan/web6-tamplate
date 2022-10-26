import { useEffect, useRef } from 'react'

//style
import { LayerBlur } from 'scss/layout-styled/LayerBlur'
import { Sheet } from 'scss/modal-styled/Sheet'
import { View } from 'scss/layout-styled/View'

//svg
import TabIcon from 'public/icons/x-tab-icon.svg'

//custom_styled
import IconTab from 'custom/tabs/IconTab'

//
export default function ModalSheet(props) {
  const { isActive, isCancel, children, gap, paddingLR } = props

  // 모달 고정 핸들러
  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollTo(0, 0)

    if (isActive) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [isActive])

  return (
    <>
      <LayerBlur isActive={isActive} />
      <Sheet isActive={isActive} ref={ref}>
        {/* 닫기 탭 */}
        <IconTab
          sticky={true}
          position="absolute"
          right="14px"
          width="28px"
          onClick={isCancel}
        >
          <TabIcon fill="#ddd" width="28px" height="28px" />
        </IconTab>

        {/* 화면 */}
        <View
          flexStart
          gap={gap}
          paddingLR={paddingLR}
          paddingTop="40px"
          paddingBottom="40px"
        >
          {children}
        </View>
      </Sheet>
    </>
  )
}
