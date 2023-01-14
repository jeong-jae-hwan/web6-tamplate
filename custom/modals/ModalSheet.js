import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

//style
import { css } from '@emotion/react'

//atom
import { scrollPosition, scrollTopTabAtom } from 'atoms/layout-atom'
import { useRecoilState, useRecoilValue } from 'recoil'

//custom
import CancelTab from 'custom/tab-icons/fill/cancel-tab'
import { LayerBlur } from 'styles/layer-styled'

//
export default function ModalSheet(props) {
  const { children, isActive, onCancel, title, maxWidth } = props
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

  // styled
  const sheetStyled = css`
    z-index: 9997;
    //
    position: fixed;
    top: ${isActive ? '60px' : '100%'};
    left: 50%;
    transform: translateX(-50%);
    //
    width: 100%;
    max-width: ${maxWidth ? maxWidth : '500px'};
    //
    height: calc(100vh - 60px);
    //
    display: flex;
    flex-direction: column;
    //
    background-color: #fff;
    border-radius: 18px 18px 0 0;
    box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
    //
    transition: 0.25s ease-in-out;
    opacity: ${isActive ? 1 : 0};
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 1080px) {
      max-width: 100%;
      top: ${isActive ? '20px' : '100%'};
      //
      height: calc(100vh - 20px);
    }
  `

  return (
    <>
      <LayerBlur isActive={isActive} />
      <div css={sheetStyled} ref={ref}>
        <div css={stickyStyles}>
          <CancelTab onClick={handleOnCancel} />
        </div>
        {/* 화면 */}
        {title && <h1 css={titleStyled}>{title}</h1>}
        {children}
      </div>
    </>
  )
}

//styled
const titleStyled = css`
  z-index: 2;
  width: 100%;
  white-space: pre-line;
  font-size: 1.25rem;
  padding: 2em 1em 0.5em;
  min-height: 80px;
  position: sticky;
  top: 0;
  background-color: #fff;
`

const stickyStyles = css`
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 10px;
  right: 10px;
  cursor: pointer;

  button {
    position: absolute;
    right: 10px;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    transition: 0.3s ease-in-out;

    svg {
      width: 100%;
      height: 100%;
      fill: #ccc;
    }

    @media (max-width: 600px) {
      width: 24px;
      height: 24px;
    }
  }
`
