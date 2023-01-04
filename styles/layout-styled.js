import styled from '@emotion/styled'

export const View = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: ${({ maxWidth }) => maxWidth};
  transition: 0.3s ease-in-out;
`

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  column-gap: 10px;
`

export const Row = styled(Box)`
  flex-direction: row;
  align-items: ${({ center }) => (center ? 'center' : 'stretch')};
  align-items: ${({ start }) => (start ? 'start' : 'stretch')};
  align-items: ${({ end }) => (end ? 'end' : 'stretch')};
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
