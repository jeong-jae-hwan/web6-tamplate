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
