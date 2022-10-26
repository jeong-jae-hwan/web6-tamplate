import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

//components
import { Drawer } from './Drawer';

//custom-style
import Photo from 'custom/imgs/Photo';

//png,svg
import logoImg from 'public/images/logo.png';

//atoms
import styles from './@header.module.css';
import { useRecoilState } from 'recoil';
import { drawerAtom, modalStateAtom } from 'atoms/toggle';

//styles
import { ThemeProvider } from '@emotion/react';
import { HeaderView } from 'scss/layout-styled/HeaderView';
import { View } from 'scss/layout-styled/View';
import DrawerTab from 'custom/tabs/DrawerTab';
import Image from 'next/image';

//
export default function Header() {
  const router = useRouter();
  // 헤더 고정
  const [isFixed, setIsFixed] = useState(false);
  const scrollActive = () => {
    if (window.scrollY >= 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollActive);
  }, []);

  // 메뉴 토글
  const [isDrawer, setIsDrawer] = useRecoilState(drawerAtom);
  const [modalActive, setIsModalActive] = useRecoilState(modalStateAtom);
  const drawerActive = () => {
    setIsDrawer(!isDrawer);
    setIsModalActive(true);
  };

  //styles - theme
  const theme = {
    mobile: '768px',
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <View height='70px' m_height='58px'>
          <HeaderView m_height='58px'>
            <h1 aria-hidden='true'>딥팩토리</h1>

            <nav className={styles.nav_bar}>
              <Link href='/'>
                <a>
                  <Photo
                    src={logoImg}
                    alt='딥팩토리'
                    mediaMobile='768px'
                    width='32px'
                    m_width='29px'
                    priority={true}
                  />
                </a>
              </Link>

              <DrawerTab
                width='28px'
                height='28px'
                m_width='24px'
                onClick={drawerActive}
              />
            </nav>
          </HeaderView>
        </View>
      </ThemeProvider>

      {/* 드로어 메뉴 */}
      <Drawer />
    </>
  );
}
