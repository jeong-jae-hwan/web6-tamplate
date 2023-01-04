import styled from '@emotion/styled'

//
// Ul & li 영역
export const ListBox = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  row-gap: 10px;
`

export const List = styled.li`
  display: flex;
`

//
// 이미지 영역
export const Img = styled.img`
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
  border-radius: 10px;
`

//
// 탭영역
export const Tab = styled.button`
  font-size: 0.938rem;
  padding: 0.4em;

  &:disabled {
    color: #c2c2c2;
  }
`
