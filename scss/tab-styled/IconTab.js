import styled from '@emotion/styled'

export const IconTab = styled.button`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  //
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  //
  display: flex;
  align-items: center;
  justify-content: center;
  //
  padding: ${({ padding }) => padding};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-right: ${({ paddingLR }) => paddingLR};
  padding-left: ${({ paddingLR }) => paddingLR};
  //
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-right: ${({ marginRight }) => marginRight};
  margin-left: ${({ marginLeft }) => marginLeft};
  //
  rotate: ${({ isActive }) => isActive};
  //
  user-select: none;
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ m_width }) => m_width};
    height: ${({ m_height }) => m_height};
    //
    padding: ${({ m_padding }) => m_padding};
    padding-top: ${({ m_paddingTop }) => m_paddingTop};
    padding-bottom: ${({ m_paddingBottom }) => m_paddingBottom};
    padding-right: ${({ m_paddingLR }) => m_paddingLR};
    padding-left: ${({ m_paddingLR }) => m_paddingLR};
    //
    margin: ${({ m_margin }) => m_margin};
    margin-top: ${({ m_marginTop }) => m_marginTop};
    margin-bottom: ${({ m_marginBottom }) => m_marginBottom};
    margin-right: ${({ m_marginRight }) => m_marginRight};
    margin-left: ${({ m_marginLeft }) => m_marginLeft};
  }
`
