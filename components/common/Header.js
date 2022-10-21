import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

//components
import { Drawer } from './Drawer'

//custom-style
import ImgBox from 'custom/imgs/ImgBox'

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
import { View } from 'scss/layout-styled/View'
import DrawerTab from 'custom/tabs/DrawerTab'

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
    mobile: '768px',
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <View height="70px" m_height="58px">
          <HeaderView m_height="58px">
            <h1 aria-hidden="true">딥팩토리</h1>

            <nav className={styles.nav_bar}>
              <Link href="/">
                <a>
                  <ImgBox
                    src={logoImg}
                    alt="딥팩토리"
                    width="32px"
                    m_width="29px"
                    priority={true}
                  />
                </a>
              </Link>

              <DrawerTab width="26px" m_width="24px" onClick={toggleActive} />
            </nav>
          </HeaderView>
        </View>
      </ThemeProvider>

      {/* 드로어 메뉴 */}
      <Drawer />
    </>
  )
}
