import styled from '@emotion/styled'

// 모달 시트
export const Sheet = styled.div`
  z-index: 9999;
  //
  position: fixed;
  top: ${({ isActive }) => (isActive ? '5%' : '100%')};
  left: 50%;
  transform: translateX(-50%);
  //
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '500px')};
  //
  height: 100%;
  min-height: calc(100vh - 5%);
  //
  display: flex;
  flex-direction: column;
  //
  padding: 40px 20px 30px;
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
`
