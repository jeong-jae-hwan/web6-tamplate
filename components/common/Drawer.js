import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Link from 'next/link'

//atoms
import { useRecoilState } from 'recoil'
import { drawerAtom, scrollTopTabAtom } from 'atoms/layout-atom'

//styles
import { DrawerBox, Memu } from './css/S_drawer'
import { LayerBlur } from 'scss/layout-styled/LayerBlur'

//svg
import HrefIcon from 'public/icons/href-icon.svg'

//custom_styled
import CancelTab from 'custom/tab-icons/fill/cancel-tab'

//
export function Drawer() {
  const [isDrawer, setIsDrawer] = useRecoilState(drawerAtom)
  const [scrollTopTab, setScrollTopTab] = useRecoilState(scrollTopTabAtom)

  // 모달 고정 및 외부 클릭감지
  const ref = useRef()
  const clickModalOutside = event => {
    if (isDrawer && !ref.current?.contains(event.target)) {
      setIsDrawer(false)
      setScrollTopTab(false)
    }
  }

  useEffect(() => {
    ref.current?.scrollTo(0, 0)

    if (isDrawer) {
      document.body.style.overflowY = 'hidden'
      setScrollTopTab(true)
    } else {
      document.body.style.overflowY = 'auto'
      setScrollTopTab(false)
    }

    document.addEventListener('mousedown', clickModalOutside)
    return () => {
      document.removeEventListener('mousedown', clickModalOutside)
    }
  }, [isDrawer])

  // 메뉴 종류
  const menuList = [
    { name: '가입하기', a: '/join' },
    { name: '서비스 소개', a: '/' },
    { name: '템플릿 구매', a: '/' },
    { name: '자주 묻는 질문', a: '/' },
    { name: '문의하기', a: '/' },
    { name: '의뢰하기', a: '/' },
  ]

  return (
    <>
      <LayerBlur isActive={isDrawer} />
      <DrawerBox isActive={isDrawer} ref={ref}>
        <div className="sticky">
          <CancelTab onClick={() => setIsDrawer(false)} />
        </div>

        <Memu>
          {menuList.map((item, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  window.scrollTo(0, 0)
                  setIsDrawer(false)
                }}
              >
                <Link href={item.a}>
                  <span>{item.name}</span>
                  <HrefIcon />
                </Link>
              </li>
            )
          })}
        </Memu>
      </DrawerBox>
    </>
  )
}
