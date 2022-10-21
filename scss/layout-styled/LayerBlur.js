import styled from 'styled-components'

// 공통 팝업 레이어
export const LayerBlur = styled.div`
  z-index: 999;
  //
  position: fixed;
  top: 0;
  left: 0;
  //
  width: 100vw;
  height: 100vh;
  //
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  //
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.2);
`
