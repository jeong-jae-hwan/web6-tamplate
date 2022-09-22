import { atom } from 'recoil'

export const drawerState = atom({
  key: 'drawer',
  default: false,
})

export const drawerActive = atom({
  key: 'drawer-open',
  get: ({ get }) => {
    const isOpen = get(drawerState)
    return !isOpen
  },
})
