import styled from '@emotion/styled'

export const View = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease-in-out;

  max-width: ${({ maxWidth }) => maxWidth};
`

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  column-gap: 10px;
`

//
// Ul & li 영역
export const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  row-gap: 10px;
`

export const Li = styled.li`
  display: flex;
`

//
// 텍스트 영역
export const Title = styled.h1`
  font-size: ${({ size }) => (size ? size : '1.75rem')};
`

export const Title2 = styled.h2`
  font-size: ${({ size }) => (size ? size : '1.5rem')};
`

export const Title3 = styled.h3`
  font-size: ${({ size }) => (size ? size : '1.25rem')};
`

export const Text = styled.p`
  font-size: ${({ size }) => (size ? size : '0.938rem')};

  span {
    font-size: 0.813rem;
    color: #999;
  }
`

export const SubText = styled.span`
  font-size: ${({ size }) => (size ? size : '0.813rem')};
  color: #888;
`

export const Span = styled.span`
  font-size: ${({ size }) => (size ? size : '0.938rem')};
`

//
// 이미지 영역
export const Img = styled.img`
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
  border-radius: 10px;
`

//
// 탭영역
export const Tab = styled.button`
  font-size: 0.938rem;
  padding: 0.4em;

  &:disabled {
    color: #c2c2c2;
  }
`

//
// 헤더영역
export const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease-in-out;

  header {
    @media (max-width: 1080px) {
      height: 58px;
    }
  }

  h1 {
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
  }

  .logo {
    width: 34px;
    height: 34px;
    transition: 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      width: 100%;
    }

    svg {
      width: 100%;
      width: 100%;
    }

    @media (max-width: 1080px) {
      width: 28px;
      height: 28px;
    }
  }
`

export const Nav = styled.nav`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: 100%;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: 0.3s ease-in-out;
  cursor: auto;

  @media (max-width: 1080px) {
    padding: 0 20px;
  }
`
