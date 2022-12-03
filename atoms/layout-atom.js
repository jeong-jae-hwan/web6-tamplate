import { atom } from 'recoil'

// 메뉴 드로어
export const drawerAtom = atom({
  key: 'drawer',
  default: false,
})

// 모달 동작시 : scrollTop 감지 상태
export const scrollTopTabAtom = atom({
  key: 'modalActive',
  default: false,
})

// 현재 스크롤 위치 감지
export const scrollPosition = atom({
  key: 'scroll-position',
  default: 0,
})
