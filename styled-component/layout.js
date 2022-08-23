import styled from 'styled-components'

// 공통 레이아웃
export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ gap }) => gap};
  padding-right: ${({ paddingLR }) => paddingLR};
  padding-left: ${({ paddingLR }) => paddingLR};
  padding-top: ${({ paddingT }) => paddingT};
  padding-bottom: ${({ paddingB }) => paddingB};
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ mHeight }) => mHeight};
    padding-right: 20px;
    padding-left: 20px;
    padding-top: ${({ mPaddingT }) => mPaddingT};
    padding-bottom: ${({ mPaddingB }) => mPaddingB};
    column-gap: ${({ gap }) => gap};
  }
`

export const WrapperRow = styled(Wrapper)`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: row;
  column-gap: ${({ gap }) => gap};

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ mHeight }) => mHeight};
    padding-right: 20px;
    padding-left: 20px;
    padding-top: ${({ mPaddingT }) => mPaddingT};
    padding-bottom: ${({ mPaddingB }) => mPaddingB};
    column-gap: ${({ gap }) => gap};
  }
`

// 공통 팝업 레이어
export const LayerPopup = styled.div`
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.2);
`

// 햄버거 메뉴 박스
export const DrawerBox = styled.div`
  z-index: 1001;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
  width: 100%;
  max-width: 360px;
  height: 100vh;
  background-color: #fff;
  padding: 80px 30px 40px;
  margin-left: 30px;
  transition: 0.3s ease-in-out;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`
