import { atom } from 'recoil'

// 메뉴 드로어
export const drawerAtom = atom({
  key: 'drawer',
  default: false,
})

// 현재 스크롤 위치 감지
export const scrollPosition = atom({
  key: 'scroll-position',
  default: 0,
})
