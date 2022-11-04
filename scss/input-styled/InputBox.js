import styled from '@emotion/styled'

// 박스 형태의 인풋 스타일
export const InputBox = styled.div`
  width: 100%;
  //
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: ${({ gap }) => (gap ? gap : '12px')};
  //
  padding: 12px;
  //
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '5px')};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  //
  border: 1px solid #e5e5e5;
  border-radius: 10px;

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
