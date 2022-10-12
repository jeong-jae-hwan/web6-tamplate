import styled from 'styled-components'

// 에러메시지
export const ErrorMsg = styled.p`
  width: 100%;
  //
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => center && 'center'};
  column-gap: 4px;
  //
  font-size: 13px;
  color: #ff4558;
  //
  margin-top: ${({ marginT }) => (marginT ? marginT : '4px')};
  margin-top: ${({ marginB }) => marginB};
`
