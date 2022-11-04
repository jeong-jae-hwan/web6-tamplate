import { atom } from 'recoil'

// 다이아 로그
export const dialogAtom = atom({
  key: 'dialog',
  default: false,
})

// 모달 시트
export const modalSheetAtom = atom({
  key: 'modalSheet',
  default: false,
})

// 모달 시트
export const snackbarAtom = atom({
  key: 'snackbar',
  default: false,
})
