import styled from '@emotion/styled'

// 에러메시지
export const ErrorMsg = styled.p`
  width: 100%;
  //
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  align-items: center;
  justify-content: ${({ center }) => center && 'center'};
  column-gap: 4px;
  //
  font-size: 0.813rem;
  color: ${({ type }) => (type === 'info' ? '#1B7EFF' : '#ff4558')};
  //
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0.308em')};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`
