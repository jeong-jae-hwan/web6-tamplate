import React, { useEffect, useRef } from 'react';

//style
import { SnackbarWrap, Snackbar } from 'scss/modal-styled/Snackbar';

//custom_styles
import styled from 'styled-components';
import IconTab from 'custom/tabs/IconTab';

//svg
import TabIcon from 'public/icons/x-tab-icon.svg';

//
export default function AlartSnackbar(props) {
  const { isActive, isCancel, children } = props;

  // 모달 고정 및 외부 클릭감지
  const ref = useRef();
  const clickModalOutside = (event) => {
    if (isActive && !ref.current?.contains(event.target)) {
      isCancel();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  }, [isActive]);

  return (
    <>
      <SnackbarWrap isActive={isActive} ref={ref}>
        <Snackbar>
          <IconTab
            position='absolute'
            top='14px'
            right='14px'
            width='22px'
            onClick={isCancel}
          >
            <TabIcon fill='#ddd' />
          </IconTab>
          {children}
        </Snackbar>
      </SnackbarWrap>
    </>
  );
}
