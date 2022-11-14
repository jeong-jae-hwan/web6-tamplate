import styled from '@emotion/styled'

export const Label = styled.label`
  width: 100%;
  //
  font-size: 0.813rem;
  color: #666;
  //
  padding: ${({ padding }) => padding};
  //
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};

  span {
    font-size: 0.75rem;
    color: #4baafc;
    padding-left: 0.25em;
  }
`
