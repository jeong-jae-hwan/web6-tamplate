import styled from '@emotion/styled';

// 모달 시트
export const Sheet = styled.div`
  z-index: 9999;
  //
  position: fixed;
  top: ${({ isActive }) => (isActive ? '60px' : '100%')};
  left: 50%;
  transform: translateX(-50%);
  //
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '500px')};
  //
  height: calc(100vh - 60px);
  //
  display: flex;
  flex-direction: column;
  //
  background-color: #fff;
  border-radius: 18px 18px 0 0;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
  //
  transition: 0.25s ease-in-out;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    top: ${({ isActive }) => (isActive ? '20px' : '100%')};
    //
    height: calc(100vh - 20px);
  }
`;
