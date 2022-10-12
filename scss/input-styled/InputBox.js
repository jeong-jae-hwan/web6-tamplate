import styled from 'styled-components'

// 박스 형태의 인풋 스타일
export const InputBox = styled.div`
  width: 100%;
  //
  display: flex;
  align-items: center;
  justify-content: space-between;
  //
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  //
  margin-top: ${({ marginT }) => (marginT ? marginT : '4px')};
  margin-bottom: ${({ marginB }) => (marginB ? marginB : '4px')};

  //
  input {
    width: 100%;
    font-size: 0.938rem;
    padding: 12px;
  }

  //
  textarea {
    width: 100%;
    min-height: 200px;
    font-size: 0.938rem;
    padding: 12px;
  }
`

// 박스 형태의 인풋 + 버튼 스타일
export const InputBoxAndTab = styled.div`
  width: 100%;
  height: auto;
  //
  display: flex;
  align-items: center;
  column-gap: 10px;
  //
  margin-top: ${({ mT }) => (mT ? mT : '4px')};

  //
  button {
    width: 80px;
    height: auto;
    padding: 12px;
    border-radius: 8px;
    white-space: nowrap;
    background-color: #eff1fa;
    color: #3b425c;
    font-size: 14px;
  }

  button:hover {
    background-color: #e3e6f4;
  }
`
