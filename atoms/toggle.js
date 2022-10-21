import { atom } from 'recoil'

export const drawerAtom = atom({
  key: 'drawer',
  default: false,
})

export const modalStateAtom = atom({
  key: 'modalActive',
  default: false,
})
