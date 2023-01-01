import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

//components
import { Drawer } from './Drawer'

//custom-style
import DrawerTab from 'custom/tabs/DrawerTab'

//png,svg
import Logo from 'public/images/logo.svg'

//atoms
import { useRecoilState } from 'recoil'
import { drawerAtom } from 'atoms/layout-atom'

//styles
import { HeaderStyled, Nav } from './css/S_header'

//
export default function Header() {
  const [isDrawer, setIsDrawer] = useRecoilState(drawerAtom)

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

  return (
    <>
      <HeaderStyled>
        <header>
          <h1 aria-hidden="true">딥팩토리</h1>

          <Nav>
            <Link href="/" className="logo">
              <Logo alt="로고" />
            </Link>

            <DrawerTab onClick={() => setIsDrawer(!isDrawer)} />
          </Nav>
        </header>
      </HeaderStyled>

      {/* 드로어 메뉴 */}
      <Drawer />
    </>
  )
}
