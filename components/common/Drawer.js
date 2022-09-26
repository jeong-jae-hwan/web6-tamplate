import Link from 'next/link'
import styles from './@drawer.module.css'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { LayerBlur } from 'scss/layout'
import HrefIcon from 'public/icons/href-icon.svg'
import XbtnIcon from 'public/icons/xBtn-icon.svg'
import { useRecoilState, useRecoilValue } from 'recoil'
import { drawerAtom } from 'atoms/toggle'
import { DrawerBox } from 'scss/widgets'

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
    { name: '포트폴리오', a: '/ss' },
    { name: '서비스 소개', a: '/' },
    { name: '템플릿 구매', a: '/' },
    { name: '자주 묻는 질문', a: '/' },
    { name: '문의하기', a: '/' },
    { name: '의뢰하기', a: '/' },
  ]

  return (
    <>
      <LayerBlur isOpen={isDrawer} />
      <DrawerBox isOpen={isDrawer} ref={ref}>
        <button className={styles.toggleTab} onClick={() => setIsDrawer(false)}>
          <XbtnIcon />
        </button>

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
