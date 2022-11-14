import styled from '@emotion/styled'

//중복확인
export const OverlapTab = styled.button`
  font-size: 0.813rem;
  white-space: nowrap;
  //
  padding: 0.231em 0.615em;
  //
  background-color: ${({ isActive }) => (isActive ? '#e2e2e2' : '#333')};
  color: ${({ isActive }) => (isActive ? '#797979' : '#fff')};
  //
  border-radius: 100px;
`
