import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import styles from './@header.module.css'
import Link from 'next/link'
import { Wrapper } from 'styles/@styled-component/layout'
import { ThemeProvider } from 'styled-components'
import { Logo } from 'styles/@styled-component/widgets'
import logoImg from 'public/images/logo.png'
import DrawerIcon from 'public/icons/drawer-icon.svg'
import Image from 'next/image'
import { Drawer } from './Drawer'

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
  const [isToggle, setIsToggle] = useState(false)
  const toggleActive = () => {
    setIsToggle(!isToggle)
  }

  const theme = {
    mobile: '800px',
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper height="70px" m_height="58px">
          <header className={isFixed && styles.header_active}>
            <h1 aria-hidden="true" className={styles.title_hidden}>
              딥팩토리
            </h1>

            <nav className={styles.nav_bar}>
              <Link href="/">
                <Logo width="32px" mWidth="29px">
                  <Image src={logoImg} alt="딥팩토리" />
                </Logo>
              </Link>

              <button className={styles.drawer} onClick={toggleActive}>
                <DrawerIcon />
              </button>
            </nav>
          </header>
        </Wrapper>
      </ThemeProvider>

      <Drawer
        isToggle={isToggle}
        setIsToggle={setIsToggle}
        toggleActive={toggleActive}
      />
    </>
  )
}
