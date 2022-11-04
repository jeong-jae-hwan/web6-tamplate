import styled from '@emotion/styled'

// 공통 레이아웃
export const View = styled.div`
  position: relative;
  //
  width: ${({ width }) => (width ? width : '100%')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '1200px')};
  //
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  //
  display: flex;
  flex-direction: column;
  align-items: ${({ flexStart }) => (flexStart ? 'flex-start' : 'center')};
  row-gap: ${({ gap }) => gap};
  //
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-right: ${({ paddingLR }) => paddingLR};
  padding-left: ${({ paddingLR }) => paddingLR};
  //
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-right: ${({ marginRight }) => marginRight};
  margin-left: ${({ marginLeft }) => marginLeft};
  //
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ m_height }) => m_height};
    min-height: ${({ m_minHeight }) => m_minHeight};
    max-height: ${({ m_maxHeight }) => m_maxHeight};
    //
    padding-top: ${({ m_paddingTop }) => m_paddingTop};
    padding-bottom: ${({ m_paddingBottom }) => m_paddingBottom};
    padding-right: ${({ m_paddingLR }) => m_paddingLR};
    padding-left: ${({ m_paddingLR }) => m_paddingLR};
    //
    margin-top: ${({ m_marginTop }) => m_marginTop};
    margin-bottom: ${({ m_marginBottom }) => m_marginBottom};
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
    min-height: ${({ m_minHeight }) => m_minHeight};
    max-height: ${({ m_maxHeight }) => m_maxHeight};
    //
    padding-top: ${({ m_paddingTop }) => m_paddingTop};
    padding-bottom: ${({ m_paddingBottom }) => m_paddingBottom};
    padding-right: ${({ m_paddingLR }) => m_paddingLR};
    padding-left: ${({ m_paddingLR }) => m_paddingLR};
  }
`
