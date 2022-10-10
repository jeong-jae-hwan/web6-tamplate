import styled from 'styled-components'

// 공통 레이아웃
export const View = styled.div`
  position: relative;
  //
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  //
  height: ${({ height }) => height};
  //
  display: flex;
  flex-direction: column;
  align-items: ${({ flexStart }) => (flexStart ? 'flex-start' : 'center')};
  row-gap: ${({ gap }) => gap};
  //
  padding-top: ${({ paddingT }) => paddingT};
  padding-bottom: ${({ paddingB }) => paddingB};
  padding-right: ${({ paddingLR }) => paddingLR};
  padding-left: ${({ paddingLR }) => paddingLR};
  //
  margin-top: ${({ marginT }) => marginT};
  margin-bottom: ${({ marginB }) => marginB};
  margin-right: ${({ marginR }) => marginR};
  margin-left: ${({ marginL }) => marginL};
  //
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ m_height }) => m_height};
    //
    padding-top: ${({ m_paddingT }) => m_paddingT};
    padding-bottom: ${({ m_paddingB }) => m_paddingB};
    padding-right: ${({ m_paddingLR }) => m_paddingLR};
    padding-left: ${({ m_paddingLR }) => m_paddingLR};
    //
    margin-top: ${({ m_marginT }) => m_marginT};
    margin-bottom: ${({ m_marginB }) => m_marginB};
    margin-right: ${({ m_marginR }) => m_marginR};
    margin-left: ${({ m_marginL }) => m_marginL};
    //
    row-gap: ${({ m_gap }) => m_gap};
  }
`

//
//
//
// 가로 레이아웃
export const RowView = styled(View)`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  //
  column-gap: ${({ gap }) => gap};

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
    row-gap: ${({ m_gap }) => m_gap};
    //
    height: ${({ m_height }) => m_height};
    //
    padding-top: ${({ m_paddingT }) => m_paddingT};
    padding-bottom: ${({ m_paddingB }) => m_paddingB};
    padding-right: ${({ m_paddingLR }) => m_paddingLR};
    padding-left: ${({ m_paddingLR }) => m_paddingLR};
  }
`
