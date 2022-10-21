import styled from 'styled-components'

// 모달 스넥바
export const SnackbarWrap = styled.div`
  z-index: 9999;
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
  padding: 31px 20px;

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

export const Snackbar = styled.div`
  //
  position: relative;
  //
  width: 100%;
  //
  padding: 20px 20px 20px;
  //
  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.12);
`
