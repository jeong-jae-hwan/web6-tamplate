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
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => height};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  border-radius: ${({ borderR }) => borderR};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  margin-top: ${({ mT }) => mT};
  margin-bottom: ${({ pB }) => pB};

  img {
    width: 100% !important;
    object-fit: cover;
    border-radius: ${({ borderR }) => borderR};
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    max-width: ${({ m_maxWidth }) => m_maxWidth};
    height: ${({ m_height }) => m_height};
    border-radius: ${({ m_borderR }) => m_borderR};
    margin-top: ${({ m_mT }) => m_mT};
    margin-bottom: ${({ m_mB }) => m_mB};
    scale: ${({ scale }) => scale};
  }
`

// 이미지 picture박스
export const Picture = styled.picture`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => height};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  border-radius: ${({ borderR }) => borderR};
  aspect-ratio: ${({ aspect }) => (aspect ? aspect : '16 / 9')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  margin-top: ${({ mT }) => mT};
  margin-bottom: ${({ pB }) => pB};

  img {
    aspect-ratio: ${({ aspect }) => (aspect ? aspect : '16 / 9')};
    width: 100% !important;
    height: 100% !important;
    object-fit: ${({ objectFit }) => objectFit};
    border-radius: ${({ borderR }) => borderR};
  }
`

// 버튼 박스
export const Button = styled.button`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => (height ? height : '54px')};
  background-color: ${({ bg }) => (bg ? bg : '#333')};
  color: ${({ color }) => (color ? color : '#fff')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '100px'};
  box-shadow: ${({ boxShadow }) => boxShadow && '0 3px 20px rgba(0,0,0,0.11)'};
  font-size: ${({ fontSize }) => fontSize};
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

  @media only screen and (max-width: 700px) {
    max-width: ${({ maxMWidth }) => maxMWidth};
    height: ${({ height }) => (height ? height : '50px')};
  } ;
`

// 햄버거 메뉴 박스
export const DrawerBox = styled.div`
  z-index: 1001;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background-color: #fff;
  padding: 80px 15px 30px;
  transition: 0.3s ease-in-out;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    max-width: 320px;
    padding: 60px 5px 40px;
  }
`
