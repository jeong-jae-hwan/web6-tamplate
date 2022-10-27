import styled from '@emotion/styled'

// 모달 다이아로그
export const Dialog = styled.div`
  z-index: 9999;
  //
  position: fixed;
  top: ${({ isActive }) => (isActive ? '45%' : '100%')};
  left: 50%;
  transform: ${({ isActive }) =>
    isActive ? 'translate(-50%, -50%)' : 'translate(-50%, 0)'};
  //
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '300px')};
  height: ${({ height }) => height};
  //
  display: flex;
  flex-direction: column;
  //
  padding: 28px 20px 20px;
  //
  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1);
  //
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  //
  transition: 0.2s ease-in-out;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`
