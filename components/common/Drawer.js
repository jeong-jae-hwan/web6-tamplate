import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Link from 'next/link';

//atoms
import { useRecoilState } from 'recoil';
import { drawerAtom, modalStateAtom } from 'atoms/toggle';

//styles
import styles from './@drawer.module.css';
import { css } from '@emotion/react';
import { DrawerBox } from 'scss/modal-styled/DrawerBox';
import { LayerBlur } from 'scss/layout-styled/LayerBlur';
import { IconTab } from 'scss/tab-styled/IconTab';

//svg
import HrefIcon from 'public/icons/href-icon.svg';
import TabIcon from 'public/icons/x-tab-icon.svg';

//
export function Drawer() {
  const [isDrawer, setIsDrawer] = useRecoilState(drawerAtom);
  const [modalActive, setIsModalActive] = useRecoilState(modalStateAtom);

  // 모달 고정 및 외부 클릭감지
  const ref = useRef();
  const clickModalOutside = (event) => {
    if (isDrawer && !ref.current?.contains(event.target)) {
      setIsDrawer(false);
      setIsModalActive(false);
    }
  };

  useEffect(() => {
    ref.current?.scrollTo(0, 0);

    if (isDrawer) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  }, [isDrawer]);

  // 메뉴 종류
  const menuList = [
    { name: '가입하기', a: '/join' },
    { name: '서비스 소개', a: '/' },
    { name: '템플릿 구매', a: '/' },
    { name: '자주 묻는 질문', a: '/' },
    { name: '문의하기', a: '/' },
    { name: '의뢰하기', a: '/' },
  ];

  // x버튼 고정 스타일
  const stickyStyles = css`
    z-index: 999;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 14px;
    right: 14px;
  `;

  return (
    <>
      <LayerBlur isActive={isDrawer} />
      <DrawerBox isActive={isDrawer} ref={ref}>
        {/* x아이콘 */}
        <div css={stickyStyles}>
          <IconTab
            position='absolute'
            right='14px'
            width='28px'
            onClick={() => setIsDrawer(false)}
          >
            <TabIcon fill='#ddd' width='25px' height='25px' />
          </IconTab>
        </div>

        <ul className={styles.menus}>
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
            );
          })}
        </ul>
      </DrawerBox>
    </>
  );
}
