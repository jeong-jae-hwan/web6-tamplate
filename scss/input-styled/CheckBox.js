import styled from 'styled-components'

// 체크 박스
export const CheckBox = styled.div`
  width: 100%;
  //
  display: flex;
  align-items: center;
  column-gap: 6px;
  //
  padding-bottom: ${({ pB }) => pB && '20px'};
  border-bottom: ${({ border }) => border && '4px solid #f8f8f8'};
  //
  cursor: pointer;

  input {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    //
    border: 0px solid gainsboro;
    border-radius: 100px;
    //
    appearance: none;
    //
    background-color: #eee;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  }

  input:checked {
    border-color: transparent;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #1f7bda;
  }

  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //
    font-size: 14px;
    color: #666;
    //
    cursor: pointer;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
  }
`
