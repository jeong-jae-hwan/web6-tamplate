import styled from 'styled-components'

export const TabBox = styled.button`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  //
  margin-top: ${({ marginT }) => marginT};
  margin-bottom: ${({ marginB }) => marginB};
  margin-right: ${({ marginR }) => marginR};
  margin-left: ${({ marginL }) => marginL};

  //
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: ${({ m_marginT }) => m_marginT};
    margin-bottom: ${({ m_marginB }) => m_marginB};
    margin-right: ${({ m_marginR }) => m_marginR};
    margin-left: ${({ m_marginL }) => m_marginL};
  }
`
