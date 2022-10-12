import styled from 'styled-components'

//중복확인
export const OverlapTab = styled.button`
  font-size: 13px;
  white-space: nowrap;
  //
  padding: 3px 8px;
  //
  background-color: ${({ isActive }) => (isActive ? '#e2e2e2' : '#3b425c')};
  color: ${({ isActive }) => (isActive ? '#797979' : '#fff')};
  //
  border-radius: 100px;
`
