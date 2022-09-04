import styled from 'styled-components'

// 공통 레이아웃
export const Wrapper = styled.div`
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  row-gap: ${({ gap }) => gap};
  padding-top: ${({ pT }) => pT};
  padding-bottom: ${({ pB }) => pB};
  padding-right: ${({ pLR }) => pLR};
  padding-left: ${({ pLR }) => pLR};

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ m_height }) => m_height};
    padding-top: ${({ m_pT }) => m_pT};
    padding-bottom: ${({ m_pB }) => m_pB};
    padding-right: ${({ m_pLR }) => m_pLR};
    padding-left: ${({ m_pLR }) => m_pLR};
    column-gap: ${({ gap }) => gap};
  }
`

export const WrapperRow = styled(Wrapper)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  column-gap: ${({ gap }) => gap};

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ m_height }) => m_height};
    padding-top: ${({ m_pT }) => m_pT};
    padding-bottom: ${({ m_pB }) => m_pB};
    padding-right: ${({ m_pLR }) => m_pLR};
    padding-left: ${({ m_pLR }) => m_pLR};
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
  max-width: 340px;
  height: 100vh;
  background-color: #fff;
  padding: 80px 15px 30px;
  margin-left: 30px;
  transition: 0.3s ease-in-out;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    max-width: 340px;
    padding: 80px 10px 30px;
  }
`
