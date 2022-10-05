import styled from 'styled-components'

// 로고 박스
export const Logo = styled.a`
  width: ${({ width }) => width};
  height: auto;
  //
  display: flex;
  justify-content: center;
  align-items: center;
  //
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: 1080px) {
    width: ${({ mWidth }) => mWidth};
  } ;
`
