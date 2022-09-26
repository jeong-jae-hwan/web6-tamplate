import styled from 'styled-components'

// 공통 레이아웃
export const View = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: ${({ flexStart }) => (flexStart ? 'flex-start' : 'column')};
  align-items: center;
  row-gap: ${({ gap }) => gap};
  padding-top: ${({ pT }) => pT};
  padding-bottom: ${({ pB }) => pB};
  padding-right: ${({ pLR }) => pLR};
  padding-left: ${({ pLR }) => pLR};
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ m_height }) => m_height};
    padding-top: ${({ m_pT }) => m_pT};
    padding-bottom: ${({ m_pB }) => m_pB};
    padding-right: ${({ m_pLR }) => m_pLR};
    padding-left: ${({ m_pLR }) => m_pLR};
    row-gap: ${({ m_gap }) => m_gap};
  }
`

export const RowView = styled(View)`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  display: flex;
  align-items: stretch;
  flex-direction: row;
  height: ${({ height }) => height};
  column-gap: ${({ gap }) => gap};
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ mHeight }) => mHeight};
    padding-right: 20px;
    padding-left: 20px;
    padding-top: ${({ mPaddingT }) => mPaddingT};
    padding-bottom: ${({ mPaddingB }) => mPaddingB};
    column-gap: ${({ m_gap }) => m_gap};
  }
`

// 공통 팝업 레이어
export const LayerBlur = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.2);
`

export const HeaderView = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #e2e2e2;
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: 58px;
  }
`
