import styled from '@emotion/styled'

// 에러메시지
export const ErrorMsg = styled.span`
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  align-items: center;
  justify-content: ${({ center }) => center && 'center'};
  column-gap: 4px;
  //
  font-size: 13px;
  color: #ff4558;
  //
  margin: ${({ margin }) => margin};
`
