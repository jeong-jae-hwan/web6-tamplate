import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

//components
import { Drawer } from './Drawer'

//custom-style
import DrawerTab from 'custom/tabs/DrawerTab'
import Photo from 'custom/imgs/Photo'

//png,svg
import logoImg from 'public/images/logo.png'

//atoms
import { useRecoilState } from 'recoil'
import { drawerAtom } from 'atoms/layout'

//styles
import { css } from '@emotion/react'
import { View } from 'scss/layout-styled/View'

//
export default function Header() {
  const router = useRouter()
  // 헤더 고정
  const [isFixed, setIsFixed] = useState(false)
  const scrollActive = () => {
    if (window.scrollY >= 50) {
      setIsFixed(true)
    } else {
      setIsFixed(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollActive)
  }, [])

  // 메뉴 토글
  const [isDrawer, setIsDrawer] = useRecoilState(drawerAtom)
  const drawerActive = () => {
    setIsDrawer(!isDrawer)
  }

  //styles - theme
  const theme = {
    mobile: '768px',
  }

  return (
    <>
      <View height="70px" m_height="58px">
        <header css={headerStyled}>
          <h1 aria-hidden="true">딥팩토리</h1>

          <nav>
            <Link href="/">
              <Photo
                src={logoImg}
                alt="딥팩토리 디자인"
                priority={true}
                width="32px"
                m_width="26px"
              />
            </Link>

            <DrawerTab onClick={drawerActive} />
          </nav>
        </header>
      </View>

      {/* 드로어 메뉴 */}
      <Drawer />
    </>
  )
}

//styled
const headerStyled = css`
  z-index: 999;
  //
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  //
  width: 100%;
  height: 70px;
  //
  display: flex;
  justify-content: center;
  align-items: center;
  //
  background-color: #fff;
  border-bottom: 1px solid #e2e2e2;
  //
  transition: 0.3s ease-in-out;

  h1 {
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
  }

  nav {
    width: 100%;
    height: 100%;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: 0.3s ease-in-out;
    cursor: auto;
  }

  @media (max-width: 768px) {
    height: 58px;

    nav {
      .nav_bar {
        padding: 0 20px;
      }
    }
  }
`
