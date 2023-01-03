import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Link from 'next/link'

//atoms
import { useRecoilState } from 'recoil'
import { drawerAtom, scrollTopTabAtom } from 'atoms/layout-atom'

//styles
import { DrawerBlur, DrawerBox } from './css/S_drawer'
import { Li, Span, Ul } from 'scss/layout-styled/View'

//svg
import HrefIcon from 'public/icons/href-icon.svg'

//custom_styled
import CancelTab from 'custom/tab-icons/fill/cancel-tab'

//menu
import menus from './json/memu.json'

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

  return (
    <>
      <DrawerBlur isActive={isDrawer} />
      <DrawerBox isActive={isDrawer} ref={ref}>
        <div className="sticky">
          <CancelTab onClick={() => setIsDrawer(false)} />
        </div>

        <Ul>
          {menus.map((item, i) => {
            return (
              <Li
                key={i}
                onClick={() => {
                  window.scrollTo(0, 0)
                  setIsDrawer(false)
                }}
              >
                <Link href={item.a}>
                  <Span>{item.name}</Span>
                  <HrefIcon />
                </Link>
              </Li>
            )
          })}
        </Ul>
      </DrawerBox>
    </>
  )
}
