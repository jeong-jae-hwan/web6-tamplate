import { useEffect, useRef } from 'react'

//style
import { LayerBlur } from 'scss/layout-styled/LayerBlur'
import { Sheet } from 'scss/modal-styled/Sheet'
import { View } from 'scss/layout-styled/View'

//svg
import TabIcon from 'public/icons/x-tab-icon.svg'

//custom_styled
import IconTab from 'custom/tabs/IconTab'

//atom
import { scrollTopTabAtom } from 'atoms/layout'
import { useRecoilState } from 'recoil'
import { modalSheetAtom } from 'atoms/modal'

//
export default function ModalSheet(props) {
  const { isCancel, children, maxWidth, gap, paddingLR } = props

  const [scrollTopTab, setScrollTopTab] = useRecoilState(scrollTopTabAtom)
  const [isActive, setIsActive] = useRecoilState(modalSheetAtom)

  // 모달 고정 핸들러
  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollTo(0, 0)

    if (isActive) {
      document.body.style.overflowY = 'hidden'
      setScrollTopTab(true)
    } else {
      document.body.style.overflowY = 'auto'
      setScrollTopTab(false)
    }
  }, [isActive])

  return (
    <>
      <LayerBlur isActive={isActive} />
      <Sheet isActive={isActive} maxWidth={maxWidth} ref={ref}>
        {/* 닫기 탭 */}
        <IconTab
          sticky={true}
          position="absolute"
          right="14px"
          size="28px"
          onClick={() => setIsActive(false)}
        >
          <TabIcon fill="#ccc" />
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
