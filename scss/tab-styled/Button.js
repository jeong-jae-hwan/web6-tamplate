import styled from 'styled-components'

// 버튼 박스
export const Button = styled.button`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => (height ? height : '54px')};
  //
  background-color: ${({ fill }) => (fill ? fill : '#333')};
  color: ${({ color }) => (color ? color : '#fff')};
  //
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '100px'};
  //
  box-shadow: ${({ boxShadow }) => boxShadow && '0 3px 20px rgba(0,0,0,0.11)'};
  //
  font-size: ${({ fontSize }) => fontSize};
  //
  outline: none;
  border: none;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${({ bg }) => (bg ? bg : '#444')};
    box-shadow: none;
  }

  &:disabled {
    background-color: #ccc;
  }

  @media only screen and (max-width: 640px) {
    max-width: 100%;
    height: ${({ height }) => (height ? height : '50px')};
  } ;
`
