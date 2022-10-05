import styled from 'styled-components'

// 이미지 picture박스
export const Picture = styled.picture`
  position: relative;
  //
  width: ${({ width }) => (width ? width : '100%')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '100%')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '100%')};
  //
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  //
  border-radius: ${({ borderRadius }) => borderRadius};
  //
  aspect-ratio: ${({ aspect }) => aspect};
  //
  display: flex;
  align-items: center;
  justify-content: center;
  //
  margin-top: ${({ marginT }) => marginT};
  margin-bottom: ${({ marginB }) => marginB};
  //
  transition: 0.3s ease-in-out;

  img {
    width: 100% !important;
    //
    aspect-ratio: ${({ aspect }) => aspect};
    //
    border-radius: ${({ borderRadius }) => borderRadius};
    //
    object-fit: ${({ objectFit }) => objectFit};
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ m_width }) => m_width};
    max-width: ${({ m_maxWidth }) => m_maxWidth};
    //
    height: ${({ m_height }) => m_height};
    max-height: ${({ m_maxHeight }) => m_maxHeight};
    //
    border-radius: ${({ m_borderRadius }) => m_borderRadius};
    //
    margin-top: ${({ m_marginT }) => m_marginT};
    margin-bottom: ${({ m_marginB }) => m_marginB};
  }
`
