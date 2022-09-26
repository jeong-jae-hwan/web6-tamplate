import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from './@header.module.css'
import Link from 'next/link'
import { HeaderView, View } from 'scss/layout-view'
import { ThemeProvider } from 'styled-components'
import { Logo } from 'scss/widgets'
import logoImg from 'public/images/logo.png'
import DrawerIcon from 'public/icons/drawer-icon.svg'
import Image from 'next/image'
import { Drawer } from './Drawer'
import { useRecoilState } from 'recoil'
import { drawerAtom } from 'atoms/toggle'

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

  // 미디어 쿼리
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mediaQuery = () => {
      if (window.innerWidth <= 800) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    window.addEventListener('resize', mediaQuery)

    return () => {
      window.removeEventListener('resize', mediaQuery)
      mediaQuery()
    }
  }, [isMobile])

  //styles - theme
  const theme = {
    mobile: '800px',
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <View height="70px" m_height="58px">
          <HeaderView m_height="58px">
            <h1 aria-hidden="true" className={styles.title_hidden}>
              딥팩토리
            </h1>

            <nav className={styles.nav_bar}>
              <Link href="/">
                <Logo width="32px" mWidth="29px">
                  <Image src={logoImg} alt="딥팩토리" priority={true} />
                </Logo>
              </Link>

              <button className={styles.drawer_tab} onClick={toggleActive}>
                <DrawerIcon width={isMobile ? '22px' : '27px'} />
              </button>
            </nav>
          </HeaderView>
        </View>
      </ThemeProvider>

      <Drawer />
    </>
  )
}
