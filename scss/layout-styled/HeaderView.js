import styled from '@emotion/styled'

// 헤더 뷰
export const HeaderView = styled.header`
  z-index: 999;
  //
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  //
  width: 100%;
  height: 70px;
  //
  display: flex;
  justify-content: center;
  align-items: center;
  //
  background-color: ${({ fill }) => (fill ? fill : '#fff')};
  border-bottom: 1px solid #e2e2e2;
  //
  transition: 0.3s ease-in-out;

  h1 {
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ m_height }) => m_height};
  }
`
