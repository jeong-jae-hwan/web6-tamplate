import React, { useEffect, useState } from 'react'
import Link from 'next/link'

//png,svg
import Logo from 'public/images/logo.svg'
import InstaIcon from 'public/icons/insta-icon.svg'
import TwitterIcon from 'public/icons/twitter-icon.svg'
import YoutubeIcon from 'public/icons/youtube-icon.svg'

//styles
import styled from '@emotion/styled'

//atoms
import { useRecoilState } from 'recoil'
import { drawerAtom } from 'atoms/widgets-atom'

//widgets
import DrawerTab from 'widgets/drawer-tab'

//
export default function Header({ menuActive, handleFocus }) {
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
              <Logo alt="서비스명" fill="#333" />
            </Link>

            <Menus>
              <Menu onClick={() => handleFocus(0)} isActive={menuActive === 0}>
                예약하기
              </Menu>

              <Menu onClick={() => handleFocus(1)} isActive={menuActive === 1}>
                전시
              </Menu>

              <Menu onClick={() => handleFocus(2)} isActive={menuActive === 2}>
                뉴스레터
              </Menu>

              <Menu onClick={() => handleFocus(3)} isActive={menuActive === 3}>
                공지사항
              </Menu>
            </Menus>

            <SNSMenus>
              <Menu>
                <Link href="s">
                  <InstaIcon fill="#999" />
                </Link>
              </Menu>

              <Menu>
                <Link href="s">
                  <TwitterIcon fill="#999" />
                </Link>
              </Menu>

              <Menu>
                <Link href="s">
                  <YoutubeIcon fill="#999" />
                </Link>
              </Menu>
            </SNSMenus>

            <DrawerTab fiil="#333" onClick={() => setIsDrawer(!isDrawer)} />
          </NavView>
        </NavBar>
      </HeaderBar>
    </>
  )
}

// styled
const HeaderBar = styled.div`
  position: relative;
  width: 100%;
  height: 66px;
  min-height: 66px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`

const NavBar = styled.header`
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
  background-color: ${({ isActive }) => (isActive ? '#fff' : 'transparent')};
  border-bottom: 1px solid #e2e2e2;

  @media (max-width: 1080px) {
    height: 58px;
    min-height: 58px;
  }
`

const NavView = styled.nav`
  position: relative;
  width: 100%;
  max-width: 1350px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: auto;

  .logo {
    width: 80px;
    display: flex;

    @media (max-width: 1080px) {
      width: 76px;
    }

    svg {
      width: 100%;
    }
  }
`

const SNSMenus = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 6px;

  @media (max-width: 768px) {
    display: none;
  }
`

const Menus = styled.ul`
  position: absolute;
  display: flex;
  align-items: center;
  column-gap: 20px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`

const Menu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 15px;
  color: ${({ isActive }) => (isActive ? '#333' : '#666')};
  font-weight: ${({ isActive }) => (isActive ? '500' : '400')};
  cursor: pointer;

  &:hover {
    color: #222;
    font-weight: 500;
  }

  svg {
    width: 22px;

    @media (max-width: 600px) {
      width: 20px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`
