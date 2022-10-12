import styled from 'styled-components'

// 라인 형태의 인풋 스타일
export const InputLine = styled.div`
  width: 100%;
  //
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: ${({ gap }) => (gap ? gap : '14px')};
  //
  margin-top: ${({ marginT }) => marginT};
  margin-bottom: ${({ marginB }) => marginB};
  //
  border-bottom: 1px solid #e5e5e5;

  //
  input {
    width: 100%;
    font-size: 0.938rem;
    padding: 10px 0;
  }
`
