import { useEffect, useRef } from 'react'

//style
import styled from '@emotion/styled'
import { Dialog } from 'scss/modal-styled/Dialog'

//custom_styles
import Button from 'custom/tabs/Button'
import IconTab from 'custom/tabs/IconTab'

//svg
import TabIcon from 'public/icons/x-tab-icon.svg'
import { LayerBlur } from 'scss/layout-styled/LayerBlur'

//atom
import { scrollTopTabAtom } from 'atoms/layout'
import { useRecoilState } from 'recoil'
import { dialogAtom } from 'atoms/modal'

//
export default function AlartDialog(props) {
  const { isActive, onCancel, onClick, title, subTitle } = props

  // atoms
  const [scrollTopTab, setScrollTopTab] = useRecoilState(scrollTopTabAtom)
  const [isAlartdialog, setIsAlartdialog] = useRecoilState(dialogAtom)

  // 모달 고정 및 외부 클릭감지
  const ref = useRef()
  const clickModalOutside = event => {
    if (isAlartdialog && !ref.current?.contains(event.target)) {
      setIsAlartdialog(false)
      setScrollTopTab(false)
    }
  }

  useEffect(() => {
    if (isAlartdialog) {
      document.body.style.overflowY = 'hidden'
      setScrollTopTab(true)
      setIsAlartdialog(true)
    } else {
      document.body.style.overflowY = 'auto'
      setScrollTopTab(false)
      setIsAlartdialog(false)
    }

    document.addEventListener('mousedown', clickModalOutside)
    return () => {
      document.removeEventListener('mousedown', clickModalOutside)
    }
  }, [isAlartdialog])

  // 확인 버튼
  const onClickHandler = e => {
    e.preventDefault()

    if (onClick) {
      onClick()
    }

    setIsAlartdialog(false)
  }

  return (
    <>
      <LayerBlur isActive={isAlartdialog} />
      <Dialog isActive={isAlartdialog} ref={ref}>
        {onCancel && (
          <IconTab
            onClick={() => setIsAlartdialog(false)}
            position="absolute"
            top="10px"
            right="10px"
          >
            <TabIcon fill="#ccc" />
          </IconTab>
        )}

        <TitleBox>
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </TitleBox>

        <Button onClick={onClickHandler}>확인</Button>
      </Dialog>
    </>
  )
}

//styles
const TitleBox = styled.div`
  width: 100%;
  //
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  //
  margin-bottom: 24px;

  h3 {
    font-size: 1.25rem;
    white-space: pre-line;
  }

  p {
    font-size: 0.938rem;
    color: #797979;
    white-space: pre-line;
    line-height: 1.35;
  }
`
