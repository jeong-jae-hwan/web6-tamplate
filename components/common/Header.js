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
import { css } from '@emotion/react'
import { Header, Nav } from 'styles/layout-styled'
import { Item, ItemBox } from 'styles/view-styled'

//customs
import DrawerTab from 'custom/tab-icons/stroke/drawer-tab'

//menu
import menus from './json/memu.json'

//
export default function HeaderView() {
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
      <Header>
        <header>
          <h1 aria-hidden="true">딥팩토리</h1>

          <Nav>
            <Link href="/" className="logo">
              <Logo alt="로고" />
            </Link>

            <ItemBox css={styles}>
              {menus.map((item, i) => {
                return (
                  <Item key={i}>
                    <Link href={item.a}>{item.name}</Link>
                  </Item>
                )
              })}
            </ItemBox>

            <DrawerTab onClick={() => setIsDrawer(!isDrawer)} />
          </Nav>
        </header>
      </Header>

      {/* 드로어 메뉴 */}
      <Drawer />
    </>
  )
}

//styled
const styles = css`
  width: auto;
  flex-direction: row;
  display: flex;

  @media (max-width: 1080px) {
    display: none;
  }

  a {
    padding: 8px 12px;
    border-radius: 8px;

    &:hover {
      background-color: #f8f8f8;
    }
  }
`
