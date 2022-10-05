import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

//components
import { Drawer } from './Drawer'

//png,svg
import logoImg from 'public/images/logo.png'
import DrawerIcon from 'public/icons/drawer-icon.svg'

//atoms
import styles from './@header.module.css'
import { useRecoilState } from 'recoil'
import { drawerAtom } from 'atoms/toggle'

//styles
import { ThemeProvider } from 'styled-components'
import { HeaderView } from 'scss/layout-styled/HeaderView'
import { Logo } from 'scss/image-styled/Logo'
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
  const toggleActive = () => {
    setIsDrawer(!isDrawer)
  }

  //styles - theme
  const theme = {
    mobile: '800px',
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <View height="70px" m_height="58px">
          <HeaderView m_height="58px">
            <h1 aria-hidden="true">딥팩토리</h1>

            <nav className={styles.nav_bar}>
              <Link href="/">
                <Logo width="32px" mWidth="29px">
                  <Image src={logoImg} alt="딥팩토리" priority={true} />
                </Logo>
              </Link>

              <button className={styles.drawer_tab} onClick={toggleActive}>
                <DrawerIcon width="26px" />
              </button>
            </nav>
          </HeaderView>
        </View>
      </ThemeProvider>

      <Drawer />
    </>
  )
}
