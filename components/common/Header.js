import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

//components
import { Drawer } from './Drawer'

//png,svg
import Logo from 'public/images/logo.svg'

//atoms
import { useRecoilState } from 'recoil'
import { drawerAtom } from 'atoms/layout-atom'

//styles
import styled from '@emotion/styled'

//customs
import DrawerTab from 'custom/tab-icons/stroke/drawer-tab'

//menu
import menus from './json/memu.json'

//
export default function Header() {
  const [isDrawer, setIsDrawer] = useRecoilState(drawerAtom)

  // 헤더 고정
  const [isFixed, setIsFixed] = useState(false)
  const scrollActive = () => {
    if (window.scrollY >= 100) {
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
      <HeaderBar>
        <NavBar isActive={isFixed}>
          <h1 aria-hidden="true">서비스명</h1>

          <NavView>
            <Link href="/" className="logo">
              <Logo alt="서비스명" />
            </Link>

            <Menus>
              {menus.map((item, i) => {
                return (
                  <Menu key={i}>
                    <Link href={item.a}>{item.name}</Link>
                  </Menu>
                )
              })}
            </Menus>

            <DrawerTab onClick={() => setIsDrawer(!isDrawer)} />
          </NavView>
        </NavBar>
      </HeaderBar>

      {/* 드로어 메뉴 */}
      <Drawer />
    </>
  )
}

const HeaderBar = styled.header`
  position: relative;
  width: 100%;
  height: 66px;
  min-height: 66px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    height: 58px;
    min-height: 58px;
  }

  h1 {
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
  }
`

const NavBar = styled.nav`
  z-index: 9000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 66px;
  min-height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom: ${({ isActive }) => (isActive ? '1px solid #e2e2e2' : 'none')};
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    height: 58px;
    min-height: 58px;
  }
`

const NavView = styled.div`
  width: 100%;
  max-width: 1260px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: auto;

  .logo {
    width: 90px;
    transition: 0.3s ease-in-out;
    display: flex;

    @media (max-width: 1080px) {
      width: 76px;
    }

    svg {
      width: 100%;
    }
  }
`

const Menus = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 30px;

  @media (max-width: 1080px) {
    display: none;
  }
`

const Menu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 15px;
    padding: 10px;

    &:hover {
      background-color: #f8f8f8;
      border-radius: 6px;
    }
  }
`
