import styled from 'styled-components'

// 햄버거 메뉴 박스
export const DrawerBox = styled.div`
  z-index: 1001;
  //
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
  //
  width: 100%;
  max-width: 400px;
  height: 100vh;
  //
  padding: 80px 15px 30px;
  //
  background-color: ${({ fill }) => (fill ? fill : '#fff')};
  //
  overflow: auto;
  transition: 0.3s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    max-width: 320px;
    padding: 60px 5px 40px;
  }
`
