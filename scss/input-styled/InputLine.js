import styled from '@emotion/styled'

// 라인 형태의 인풋 스타일
export const InputLine = styled.div`
  width: 100%;
  //
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: ${({ gap }) => (gap ? gap : '12px')};
  //
  padding: 10px 0 8px;
  //
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  //
  border-bottom: 1px solid #e5e5e5;

  //
  input {
    width: 100%;
    font-size: 0.938rem;
  }

  //
  textarea {
    width: 100%;
    height: 100%;
    font-size: 0.938rem;
  }
`
