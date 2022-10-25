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

//
export default function AlartDialog(props) {
  const { isActive, isCancel, isSubmit, title, subTitle } = props

  // 모달 고정 및 외부 클릭감지
  const ref = useRef()
  const clickModalOutside = event => {
    if (isActive && !ref.current?.contains(event.target)) {
      isCancel()
    }
  }

  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }

    document.addEventListener('mousedown', clickModalOutside)
    return () => {
      document.removeEventListener('mousedown', clickModalOutside)
    }
  }, [isActive])

  //styles

  return (
    <>
      <LayerBlur isActive={isActive} />
      <Dialog isActive={isActive} ref={ref}>
        <IconTab onClick={isCancel} position="absolute" top="14px" right="14px">
          <TabIcon width="25px" height="25px" fill="#ddd" />
        </IconTab>

        <TitleBox>
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </TitleBox>

        <Button onClick={isSubmit}>버튼</Button>
      </Dialog>
    </>
  )
}

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
