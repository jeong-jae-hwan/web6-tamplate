import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Link from 'next/link'

//atoms
import { useRecoilState } from 'recoil'
import { drawerAtom } from 'atoms/toggle'

//styles
import styles from './@drawer.module.css'
import { DrawerBox } from 'scss/modal-styled/DrawerBox'
import { LayerBlur } from 'scss/layout-styled/LayerBlur'

//custom_styles
import IconTab from 'custom/tabs/IconTab'

//svg
import HrefIcon from 'public/icons/href-icon.svg'
import XTabIcon from 'public/icons/x-tab-icon.svg'

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
        <IconTab
          position="absolute"
          top="16px"
          right="20px"
          onClick={() => setIsDrawer(false)}
        >
          <XTabIcon fill="#ccc" />
        </IconTab>

        <ul>
          {menuList.map((item, i) => {
            return (
              <li
                key={i}
                className={styles.menu}
                onClick={() => setIsDrawer(false)}
              >
                <Link href={item.a}>
                  <a>
                    <span>{item.name}</span>
                    <HrefIcon />
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </DrawerBox>
    </>
  )
}
