import { useEffect, useRef } from 'react'

//style
import styled from '@emotion/styled'
import { css } from '@emotion/react'

//atom
import { scrollTopTabAtom } from 'atoms/layout-atom'
import { useRecoilState } from 'recoil'

//
export default function Dialog(props) {
  const {
    children,
    isActive,
    disabled,
    onCancel,
    onClick,
    title,
    subTitle,
    zIndex,
  } = props

  // atoms = scrollToTab
  const [scrollTopTab, setScrollTopTab] = useRecoilState(scrollTopTabAtom)

  // 모달 고정 및 외부 클릭감지
  const ref = useRef()
  const clickModalOutside = event => {
    if (isActive && !ref.current?.contains(event.target)) {
      setScrollTopTab(false)
      onCancel()
    }
  }

  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = 'hidden'
      setScrollTopTab(true)
    } else {
      document.body.style.overflowY = 'auto'
      setScrollTopTab(false)
    }

    document.addEventListener('mousedown', clickModalOutside)
    return () => {
      document.removeEventListener('mousedown', clickModalOutside)
    }
  }, [isActive])

  // styled
  const layerStyled = css`
    z-index: ${zIndex ? zIndex : '8888'};
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

  const dialogStyled = css`
    z-index: 9000;
    //
    position: fixed;
    top: ${isActive ? '45%' : '100%'};
    left: 50%;
    transform: ${isActive ? 'translate(-50%, -50%)' : 'translate(-50%, 0)'};
    //
    width: 100%;
    max-width: 300px;
    //
    display: flex;
    flex-direction: column;
    //
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
    //
    opacity: ${isActive ? 1 : 0};
    //
    transition: 0.2s ease-in-out;

    &::-webkit-scrollbar {
      display: none;
    }
  `

  return (
    <>
      <div css={layerStyled} />
      <div css={dialogStyled} ref={ref}>
        {/* tab */}
        <button css={cancelStyled} type="button" onClick={onCancel}>
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

        <div css={viewStyled}>
          {/* 타이틀 */}
          <TitleBox>
            <h3>{title}</h3>
            <p>{subTitle}</p>
          </TitleBox>

          {children}
          <TabBox>
            <button type="button" className="cancel" onClick={onCancel}>
              취소
            </button>
            <button
              type="button"
              className="submit"
              onClick={onClick}
              disabled={disabled}
            >
              확인
            </button>
          </TabBox>
        </div>
      </div>
    </>
  )
}

// styled-comp
const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-bottom: 20px;

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

//styled
const TabBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;

  .cancel {
    width: 100%;
    height: 3.2em;
    border-radius: 0.8em;
    font-size: 0.938rem;
    color: #aaa;
    background-color: #f0f0f0;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #eee;
    }
  }

  .submit {
    width: 100%;
    height: 3.2em;
    border-radius: 0.8em;
    font-size: 0.938rem;
    color: #fff;
    background-color: #333;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #252525;
    }

    &:disabled {
      background-color: #ccc;
    }
  }
`

// styled
const cancelStyled = css`
  z-index: 999;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  user-select: none;
  transition: 0.3s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
    fill: #e0e0e0;
  }
`

const viewStyled = css`
  padding: 26px 20px 18px;
  display: flex;
  flex-direction: column;
`
