import styled from 'styled-components'

export const Label = styled.label`
  width: 100%;
  //
  font-size: 13px;
  color: #555;
  //
  margin-top: ${({ marginT }) => marginT};
  margin-bottom: ${({ marginB }) => marginB};

  span {
    font-size: 12px;
    color: #4baafc;
    padding-left: 4px;
  }
`
