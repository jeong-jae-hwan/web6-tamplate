import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Link from 'next/link'

//atoms
import { useRecoilState } from 'recoil'
import { drawerAtom, scrollTopTabAtom } from 'atoms/layout-atom'

//styles
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { LayerBlur } from 'scss/layout-styled/LayerBlur'

//svg
import HrefIcon from 'public/icons/href-icon.svg'
import TabIcon from 'public/icons/x-tab-icon.svg'

//custom_styled
import IconTab from 'custom/tabs/IconTab'

//
export function Drawer() {
  const [isDrawer, setIsDrawer] = useRecoilState(drawerAtom)
  const [scrollTopTab, setScrollTopTab] = useRecoilState(scrollTopTabAtom)

  // 모달 고정 및 외부 클릭감지
  const ref = useRef()
  const clickModalOutside = event => {
    if (isDrawer && !ref.current?.contains(event.target)) {
      setIsDrawer(false)
      setScrollTopTab(false)
    }
  }

  useEffect(() => {
    ref.current?.scrollTo(0, 0)

    if (isDrawer) {
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
  }, [isDrawer])

  // 메뉴 종류
  const menuList = [
    { name: '가입하기', a: '/join' },
    { name: '서비스 소개', a: '/' },
    { name: '템플릿 구매', a: '/' },
    { name: '자주 묻는 질문', a: '/' },
    { name: '문의하기', a: '/' },
    { name: '의뢰하기', a: '/' },
  ]

  return (
    <>
      <LayerBlur isActive={isDrawer} />
      <DrawerBox isActive={isDrawer} ref={ref}>
        {/* 닫기 탭 */}
        <IconTab
          sticky={true}
          position="absolute"
          right="14px"
          m_size="23px"
          onClick={() => setIsDrawer(false)}
        >
          <TabIcon fill="#ddd" />
        </IconTab>

        <ul css={menusStyled}>
          {menuList.map((item, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  window.scrollTo(0, 0)
                  setIsDrawer(false)
                }}
              >
                <Link href={item.a}>
                  <span>{item.name}</span>
                  <HrefIcon />
                </Link>
              </li>
            )
          })}
        </ul>
      </DrawerBox>
    </>
  )
}

//styled
const DrawerBox = styled.div`
  z-index: 1001;
  //
  position: fixed;
  top: 0;
  right: ${({ isActive }) => (isActive ? 0 : '-100%')};
  //
  width: 100%;
  max-width: 400px;
  height: 100vh;
  //
  background-color: #fff;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.08);
  //
  overflow: auto;
  transition: 0.2s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 1080px) {
    max-width: 320px;
  }
`

const menusStyled = css`
  transition: 0.3s ease-in-out;
  padding: 80px 15px 30px;

  @media (max-width: 768px) {
    padding: 60px 5px 40px;
  }

  li {
    margin-bottom: 10px;

    @media (max-width: 1080px) {
      margin-bottom: 10px;
    }

    a {
      width: 100%;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 1.125rem;
        font-weight: 500;

        @media (max-width: 1080px) {
          font-size: 1rem;
        }
      }
    }
  }
`
