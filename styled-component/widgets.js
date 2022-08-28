import styled from 'styled-components'

export const Logo = styled.a`
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: 1080px) {
    width: ${({ mWidth }) => mWidth};
  } ;
`

export const ImgBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  transition: 0.3s ease-in-out;

  img {
    width: 100%;
  }
`

export const Button = styled.button`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => (height ? height : '54px')};
  background-color: ${({ bg }) => (bg ? bg : '#333')};
  color: ${({ color }) => (color ? color : '#fff')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '100px'};
  border: none;
  box-shadow: ${({ boxShadow }) => boxShadow && '0 3px 20px rgba(0,0,0,0.11)'};
  font-size: ${({ fontSize }) => fontSize};
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${({ bg }) => (bg ? bg : '#444')};
    box-shadow: none;
  }

  &:disabled {
    background-color: #aaa;
  }

  @media only screen and (max-width: 600px) {
    height: ${({ height }) => (height ? height : '50px')};
  } ;
`
