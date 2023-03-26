import { atom } from 'recoil'

// 현재 스크롤 위치 감지
export const scrollPosition = atom({
  key: 'scroll-position',
  default: 0,
})
