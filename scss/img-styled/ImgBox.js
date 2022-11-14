import styled from '@emotion/styled'

// 이미지 박스
export const ImgBox = styled.div`
  position: relative;
  //
  width: ${({ width }) => (width ? width : '100%')};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  //
  border-radius: ${({ borderRadius }) => borderRadius};
  //
  display: flex;
  align-items: center;
  justify-content: center;
  //
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  //

  span {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    //
    border-radius: ${({ borderRadius }) => borderRadius};
    object-fit: ${({ objectFit }) => objectFit};
    aspect-ratio: ${({ aspect }) => aspect};
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ m_width }) => m_width};
    max-width: ${({ m_maxWidth }) => m_maxWidth};
    height: ${({ m_height }) => m_height};
    //
    border-radius: ${({ m_borderRadius }) => m_borderRadius};
    //
    margin: ${({ m_margin }) => m_margin};
    margin-top: ${({ m_marginTop }) => m_marginTop};
    margin-bottom: ${({ m_marginBottom }) => m_marginBottom};
  }
`
