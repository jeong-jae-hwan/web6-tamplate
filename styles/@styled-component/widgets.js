import styled from 'styled-components'

// 로고 박스
export const Logo = styled.a`
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: 1080px) {
    width: ${({ mWidth }) => mWidth};
  } ;
`

// 이미지 박스
export const ImgBox = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  border-radius: ${({ borderR }) => borderR};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  object-fit: cover;
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    max-width: ${({ m_maxWidth }) => m_maxWidth};
    height: ${({ m_height }) => m_height};
    border-radius: ${({ m_borderR }) => m_borderR};
  } ;
`

// 버튼 박스
export const Button = styled.button`
  transition: 0.3s ease-in-out;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => (height ? height : '54px')};
  background-color: ${({ bg }) => (bg ? bg : '#333')};
  color: ${({ color }) => (color ? color : '#fff')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '100px'};
  box-shadow: ${({ boxShadow }) => boxShadow && '0 3px 20px rgba(0,0,0,0.11)'};
  font-size: ${({ fontSize }) => fontSize};
  border: none;
  outline: none;

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
