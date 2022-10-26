import { useEffect, useRef } from 'react';

//style
import { css } from '@emotion/react';
import { LayerBlur } from 'scss/layout-styled/LayerBlur';
import { Sheet } from 'scss/modal-styled/Sheet';
import { View } from 'scss/layout-styled/View';
import { IconTab } from 'scss/tab-styled/IconTab';

//svg
import TabIcon from 'public/icons/x-tab-icon.svg';

//
export default function ModalSheet(props) {
  const { isActive, isCancel, children, gap, paddingLR } = props;

  // 모달 고정 핸들러
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollTo(0, 0);

    if (isActive) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isActive]);

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
      <LayerBlur isActive={isActive} />
      <Sheet isActive={isActive} ref={ref}>
        {/* x아이콘 */}
        <div css={stickyStyles}>
          <IconTab
            position='absolute'
            right='14px'
            width='28px'
            onClick={isCancel}
          >
            <TabIcon fill='#ddd' width='28px' height='28px' />
          </IconTab>
        </div>

        {/* 화면 */}
        <View
          flexStart
          gap={gap}
          paddingLR={paddingLR}
          paddingTop='40px'
          paddingBottom='40px'
        >
          {children}
        </View>
      </Sheet>
    </>
  );
}
