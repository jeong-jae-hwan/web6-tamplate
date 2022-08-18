import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from './@header.module.css'
import toggleIcon from 'public/icons/toggle-menu.png'
import hrefIcon from 'public/icons/href-icon.svg'
import xIcon from 'public/icons/xBtn-icon.svg'
import logo from 'public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from 'styled-component/widgets'
import { Wrapper } from 'styled-component/layout'
import { ThemeProvider } from 'styled-components'

export default function Header() {
  const router = useRouter()

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
        <Wrapper height="70px" mHeight="58px">
          <header className={isFixed && styles.header_active}>
            <div className={styles.container}>
              <Link href="/">
                <Logo width="31px" mWidth="28px">
                  <Image src={logo} alt="딥팩토리" />
                </Logo>
              </Link>

              <button className={styles.toggleTab} onClick={toggleActive}>
                <Image src={toggleIcon} alt="" />
              </button>
            </div>
          </header>
        </Wrapper>
      </ThemeProvider>

      <ToggleMenu isToggle={isToggle} toggleActive={toggleActive} />
    </>
  )
}

export function ToggleMenu(props) {
  const { isToggle, toggleActive } = props
  const menuList = [
    { name: '포트폴리오', a: '/' },
    { name: '서비스 소개', a: '/' },
    { name: '템플릿 구매', a: '/' },
    { name: '자주 묻는 질문', a: '/' },
    { name: '문의하기', a: '/' },
    { name: '의뢰하기', a: '/' },
  ]

  return (
    <div className={isToggle && styles.toggle_layer}>
      <div
        className={
          isToggle
            ? `${styles.menu_wrap} ${styles.menu_wrap_active}`
            : styles.menu_wrap
        }
      >
        <button className={styles.toggleTab} onClick={toggleActive}>
          <Image src={xIcon} alt="" />
        </button>
        <nav>
          <ul>
            {menuList.map((item, i) => {
              return (
                <li key={i} className={styles.menu} onClick={toggleActive}>
                  <Link href={item.a}>
                    <a>
                      <p>{item.name}</p>
                      <Image src={hrefIcon} alt={item.name} />
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}
