import React, { useEffect, useState } from 'react'

//styles
import { css } from '@emotion/react'

//atom
import { useRecoilState } from 'recoil'
import { scrollPosition } from 'atoms/widgets-atom'

//
export default function ScrollTopTab() {
  const [ScrollY, setScrollY] = useState(0)
  const [btnStatus, setBtnStatus] = useState(false) // 버튼 상태

  // 스크롤 수치 감지
  const handleFollow = () => {
    setScrollY(window.pageYOffset)
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true)
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false)
    }
  }

  //
  //
  // 탭 위로 핸들러
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setScrollY(0) // ScrollY 의 값을 초기화
    setBtnStatus(false) // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch()
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  }, [ScrollY])

  //
  //
  // 스크롤 위치 파악용
  const [isPosition, setIsPosition] = useRecoilState(scrollPosition)

  function onScroll() {
    setIsPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      {ScrollY > 100 && (
        <button onClick={handleTop} css={tabStyled}>
          <TopTabIcon />
        </button>
      )}
    </>
  )

  return isPosition
}

// 스타일
const tabStyled = css`
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background-color: #353535;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-weight: 500;
  cursor: pointer;
  z-index: 7777;
  user-select: none;
  transition: 0.3s ease-in-out;

  svg {
    width: 20px;
  }

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;

    svg {
      width: 18px;
    }
  }
`

//아이콘
const TopTabIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <g id="scroll" transform="translate(-98 -931)">
      <rect
        id="사각형_8383"
        data-name="사각형 8383"
        width="16"
        height="16"
        transform="translate(98 931)"
        fill="none"
      />
      <g
        id="그룹_95636"
        data-name="그룹 95636"
        transform="translate(99 947) rotate(-90)"
      >
        <g id="그룹_94352" data-name="그룹 94352" transform="translate(0 0)">
          <path
            id="패스_86881"
            data-name="패스 86881"
            d="M10.448,13.759a1.055,1.055,0,0,1-1.432-.084A.983.983,0,0,1,9,12.326l3.763-4.32H.994A1,1,0,0,1,0,7a.989.989,0,0,1,.3-.7,1.007,1.007,0,0,1,.7-.284H12.7L9.14,1.692A.986.986,0,0,1,9.162.306,1.063,1.063,0,0,1,9.913,0h.005A1.115,1.115,0,0,1,10.7.36l5.03,6.054a.989.989,0,0,1,.008,1.358Z"
            transform="translate(0 0.001)"
            fill="#ccc"
          />
        </g>
      </g>
    </g>
  </svg>
)
