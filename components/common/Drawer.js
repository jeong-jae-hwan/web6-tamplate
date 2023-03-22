import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Link from 'next/link'

//atoms
import { useRecoilState } from 'recoil'
import { drawerAtom } from 'atoms/widgets-atom'

//styles
import styled from '@emotion/styled'

//svg
import HrefIcon from 'public/icons/href-icon.svg'

//custom_styled
import CancelTab from 'custom/tab-icons/fill/cancel-tab'

//menu
import menus from './memu.json'

//
export function Drawer() {
  const [isDrawer, setIsDrawer] = useRecoilState(drawerAtom)

  // 모달 고정 및 외부 클릭감지
  const ref = useRef()
  const clickModalOutside = event => {
    if (isDrawer && !ref.current?.contains(event.target)) {
      setIsDrawer(false)
    }
  }

  useEffect(() => {
    ref.current?.scrollTo(0, 0)

    if (isDrawer) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }

    document.addEventListener('mousedown', clickModalOutside)
    return () => {
      document.removeEventListener('mousedown', clickModalOutside)
    }
  }, [isDrawer])

  // 메뉴 종류

  return (
    <>
      <DrawerBlur isActive={isDrawer} />
      <DrawerBox isActive={isDrawer} ref={ref}>
        <div className="sticky">
          <CancelTab onClick={() => setIsDrawer(false)} />
        </div>

        <Menus>
          {menus.map((item, i) => {
            return (
              <Menu
                key={i}
                onClick={() => {
                  window.scrollTo(0, 0)
                  setIsDrawer(false)
                }}
              >
                <Link href={item.a}>
                  <MenuName>{item.name}</MenuName>
                  <HrefIcon />
                </Link>
              </Menu>
            )
          })}
        </Menus>
      </DrawerBox>
    </>
  )
}

// styled
const DrawerBlur = styled.div`
  z-index: 9000;
  //

  position: fixed;
  top: 0;
  left: 0;
  //
  width: 100vw;
  height: 100vh;
  //
  display: none;
  flex-direction: column;
  align-items: center;
  //
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background-color: rgba(0, 0, 0, 0.25);

  @media (max-width: 1080px) {
    display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  }
`

const DrawerBox = styled.div`
  z-index: 9990;
  display: none;
  position: fixed;
  top: 0;
  right: ${({ isActive }) => (isActive ? 0 : '-100%')};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.08);
  overflow: auto;
  transition: 0.2s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1080px) {
    max-width: 320px;
    display: flex;
  }

  .sticky {
    z-index: 9997;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 14px;
    right: 14px;
    cursor: pointer;

    button {
      margin-right: 14px;
      svg {
        width: 24px;
      }
    }
  }
`

const Menus = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  row-gap: 6px;
  margin-top: 30px;
`

const Menu = styled.li`
  width: 100%;
  padding: 6px 10px;

  a {
    padding: 6px 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      fill: #999;
    }
  }
`

const MenuName = styled.span`
  font-size: 0.938rem;
`
