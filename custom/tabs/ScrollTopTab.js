import React, { useEffect, useState } from 'react'

//svg
import UpIcon from 'public/icons/scroll-up-icon.svg'

//styles
import { css } from '@emotion/react'

//atom
import { useRecoilValue } from 'recoil'
import { modalStateAtom } from 'atoms/toggle'

//
export default function ScrollTopTab() {
  const [ScrollY, setScrollY] = useState(0)
  const [BtnStatus, setBtnStatus] = useState(false) // 버튼 상태
  const modalActive = useRecoilValue(modalStateAtom)

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
  })

  return (
    <>
      {ScrollY > 100 && !modalActive && (
        <button
          onClick={handleTop}
          css={`
            position: fixed;
            bottom: 30px;
            right: 20px;
            width: 44px;
            height: 44px;
            border-radius: 100px;
            background-color: #fff;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            color: #666;
            font-weight: 500;
            cursor: pointer;
            z-index: 9999;
            user-select: none;
            transition: 0.3s ease-in-out;
          `}
        >
          <UpIcon />
        </button>
      )}
    </>
  )
}
