import { atom } from 'recoil';

export const drawerAtom = atom({
  key: 'drawer',
  default: false,
});

// 모달 동작시 : scrollTop 감지 상태
export const modalStateAtom = atom({
  key: 'modalActive',
  default: false,
});
