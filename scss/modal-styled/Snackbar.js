import styled from '@emotion/styled'

// 모달 스넥바
export const SnackbarWrap = styled.div`
  z-index: 99999;
  //
  position: fixed;
  top: ${({ isActive }) => (isActive ? '0' : '-100%')};
  left: 50%;
  transform: translateX(-50%);
  //
  width: 100%;
  max-width: 500px;
  height: ${({ height }) => height};
  //
  display: flex;
  flex-direction: column;
  //
  padding: 30px 20px;

  //
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  //
  transition: 0.2s ease-in-out;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    top: auto;
    bottom: ${({ isActive }) => (isActive ? '0' : '-100%')};
  }
`
