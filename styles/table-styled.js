import styled from '@emotion/styled'

export const Table = styled.table`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

//
export const Thead = styled.thead`
  width: 100%;
`

//
export const Tbody = styled.tbody`
  width: 100%;
  height: 100%;
`

//
export const Tr = styled.tr`
  width: 100%;
  display: flex;
`

//
export const Th = styled.th`
  height: 34px;
  padding: 0.538em 0.77em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.813rem;
  font-weight: 400;
  color: #888;
  background-color: #f6f6f6;
`
//
export const Td = styled.td`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 44px;
  font-size: 0.875rem;
  padding: 0.714em 1.25em;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e2e2e2;

  p,
  span {
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
  }

  button {
    padding: 0;
    font-size: 14px;
  }
`
