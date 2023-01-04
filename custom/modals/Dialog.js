import { useEffect, useRef } from 'react'

//style
import styled from '@emotion/styled'
import { css } from '@emotion/react'

//atom
import { scrollTopTabAtom } from 'atoms/layout-atom'
import { useRecoilState } from 'recoil'

//custom
import CancelTab from 'custom/tab-icons/fill/cancel-tab'
import { LayerBlur } from 'styles/layer-styled'

//
export default function Dialog(props) {
  const { children, isActive, disabled, onCancel, onClick, title, subTitle } =
    props

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
  const dialogStyled = css`
    z-index: 9997;
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
      <LayerBlur isActive={isActive} />
      <div css={dialogStyled} ref={ref}>
        <CancelTab style={cancelStyled} onClick={onCancel} />

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
