import styled from '@emotion/styled';

// 햄버거 메뉴 박스
export const DrawerBox = styled.div`
  z-index: 1001;
  //
  position: fixed;
  top: 0;
  right: ${({ isActive }) => (isActive ? 0 : '-100%')};
  //
  width: 100%;
  max-width: 400px;
  height: 100vh;
  //
  background-color: ${({ fill }) => (fill ? fill : '#fff')};
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.08);
  //
  overflow: auto;
  transition: 0.2s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    max-width: 320px;
  }
`;
