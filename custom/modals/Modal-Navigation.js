import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

//style
import { css } from '@emotion/react'
import { LayerBlur } from 'styles/layer-styled'
import { Box, Row } from 'styles/layout-styled'
import { Title } from 'styles/text-styled'
import { Tab } from 'styles/view-styled'
import { Sheet } from 'styles/modal-styled'

//atom
import { scrollPosition, scrollTopTabAtom } from 'atoms/layout-atom'
import { useRecoilState, useRecoilValue } from 'recoil'

//custom
import CancelTab from 'custom/tab-icons/fill/cancel-tab'

//
export default function ModalNavigation(props) {
  const { children, isActive, onCancel, onSubmit, title, maxWidth, tabName } =
    props
  const router = useRouter()
  const ref = useRef()

  //
  //
  // atoms = scrollToTab
  const [scrollTopTab, setScrollTopTab] = useRecoilState(scrollTopTabAtom)

  // 스크롤 위치
  const isPosition = useRecoilValue(scrollPosition)

  //
  //
  // 모달 고정 핸들러
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

  //
  //
  // 윈도우 위치
  useEffect(() => {
    window.scrollTo(0, isPosition)
  }, [router.query.detail || isActive])

  //
  //
  // 캔슬 모달
  const handleOnCancel = () => {
    if (onCancel) {
      onCancel()
    } else {
      router.back()
    }
  }

  //제출
  const handleOnSubmit = () => {
    onSubmit()
    handleOnCancel()
  }

  return (
    <>
      <LayerBlur isActive={isActive} />
      <Sheet ref={ref} isActive={isActive} maxWidth={maxWidth}>
        <Row css={styles.title}>
          <Box css={styles.cancel}>
            <CancelTab onClick={handleOnCancel} />
          </Box>

          <Title>{title}</Title>

          {tabName && (
            <Tab type="button" css={styles.tab} onClick={handleOnSubmit}>
              {tabName}
            </Tab>
          )}
        </Row>

        {children}
      </Sheet>
    </>
  )
}

//styled
const styles = {
  box: css`
    padding: 6px 0 0;
  `,

  title: css`
    min-height: 62px;
    height: 62px;
    z-index: 99;
    position: sticky;
    top: 0;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e2e2e2;
    background-color: #fff;

    strong {
      font-size: 1.125rem;
      font-weight: 500;
    }
  `,

  cancel: css`
    width: auto;
    position: absolute;
    left: 20px;
  `,

  tab: css`
    position: absolute;
    right: 20px;
    font-size: 15px;
    color: #1f7bda;

    &:disabled {
      color: #ccc;
    }
  `,
}
