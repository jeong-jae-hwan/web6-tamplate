import styled from '@emotion/styled'

// 로고 박스
export const Logo = styled.div`
  width: ${({ width }) => width};
  height: auto;
  //
  display: flex;
  justify-content: center;
  align-items: center;
  //
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: ${({ m_width }) => m_width};
  } ;
`
