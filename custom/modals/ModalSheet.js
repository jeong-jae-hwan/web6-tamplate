import { useEffect, useRef } from 'react'

//style
import { css } from '@emotion/react'

//atom
import { scrollTopTabAtom } from 'atoms/layout-atom'
import { useRecoilState } from 'recoil'

//
export default function ModalSheet(props) {
  const { children, isActive, onCancel, title, maxWidth } = props

  // atoms = scrollToTab
  const [scrollTopTab, setScrollTopTab] = useRecoilState(scrollTopTabAtom)

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

  // styled
  const layerStyled = css`
    z-index: 6666;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: ${isActive ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    background-color: rgba(0, 0, 0, 0.25);
    transition: 0.25s ease-in-out;
    opacity: ${isActive ? 1 : 0};
  `

  const sheetStyled = css`
    z-index: 7777;
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

    @media (max-width: 600px) {
      top: ${isActive ? '20px' : '100%'};
      //
      height: calc(100vh - 20px);
    }
  `

  return (
    <>
      <div css={layerStyled} />
      <div css={sheetStyled} ref={ref}>
        <BackTab onCancel={onCancel} />
        {/* 화면 */}
        {title && <h1 css={titleStyled}>{title}</h1>}
        {children}
      </div>
    </>
  )
}

//styled
const titleStyled = css`
  width: 100%;
  white-space: pre-line;
  font-size: 1.25rem;
  padding: 2em 1em 0.75em;
`

// x탭
export const BackTab = ({ onCancel }) => {
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

  return (
    <div css={stickyStyles}>
      <button type="button" onClick={onCancel}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
          <g
            id="그룹_96430"
            data-name="그룹 96430"
            transform="translate(-1139 -96)"
          >
            <circle
              id="타원_1270"
              data-name="타원 1270"
              cx="12.5"
              cy="12.5"
              r="12.5"
              transform="translate(1139 96)"
              fill="#fff"
            />
            <path
              id="xBtn"
              d="M25.481,7.8a12.5,12.5,0,1,0,0,17.677,12.5,12.5,0,0,0,0-17.677m-6.32,12.824-2.519-2.519-2.52,2.52a1.038,1.038,0,0,1-1.467-1.467l2.52-2.52L12.66,14.126a1.038,1.038,0,0,1,1.467-1.467l2.515,2.516,2.515-2.515a1.035,1.035,0,0,1,1.464,1.464l-2.515,2.515,2.52,2.519-.221.221.221-.221a1.038,1.038,0,0,1-1.467,1.467"
              transform="translate(1134.858 91.858)"
              fill="current"
            />
          </g>
        </svg>
      </button>
    </div>
  )
}
