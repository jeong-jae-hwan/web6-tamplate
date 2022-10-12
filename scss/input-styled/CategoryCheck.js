import styled from 'styled-components'

export const CategoryCheck = styled.label`
  width: 100%;

  //
  input {
    display: none;
  }

  //
  input[type='radio'] + span {
    width: 100%;
    //
    padding: 12px 15px;
    //
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    //
    border: 1px solid #e2e2e2;
    border-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : '10px'};
    //
    font-size: 15px;
    color: #aaa;
    //
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  //
  input[type='radio']:checked + span {
    background-color: #eff1fa;
    border: 1px solid #eff1fa;
    color: #3b425c;
  }

  @media (max-width: 500px) {
    input[type='radio'] + span {
      font-size: 14px;
    }
  }
`
