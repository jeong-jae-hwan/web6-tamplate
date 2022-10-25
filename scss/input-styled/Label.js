import styled from '@emotion/styled'

export const Label = styled.label`
  width: 100%;
  //
  font-size: 13px;
  color: #666;
  //
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};

  span {
    font-size: 12px;
    color: #4baafc;
    padding-left: 4px;
  }
`
