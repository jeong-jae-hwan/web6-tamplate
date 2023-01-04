import styled from '@emotion/styled'
import { Box } from './layout-styled'

export const DrawerBlur = styled.div`
  z-index: 9000;
  //

  position: fixed;
  top: 0;
  left: 0;
  //
  width: 100vw;
  height: 100vh;
  //
  display: none;
  flex-direction: column;
  align-items: center;
  //
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background-color: rgba(0, 0, 0, 0.25);

  @media (max-width: 1080px) {
    display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  }
`

export const DrawerBox = styled(Box)`
  z-index: 9990;
  //
  display: none;
  position: fixed;
  top: 0;
  right: ${({ isActive }) => (isActive ? 0 : '-100%')};
  //
  width: 100%;
  max-width: 400px;
  height: 100vh;
  //
  background-color: #fff;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.08);
  //
  overflow: auto;
  transition: 0.2s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1080px) {
    max-width: 320px;
    display: flex;
  }

  .sticky {
    z-index: 9997;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 14px;
    right: 14px;
    cursor: pointer;

    button {
      margin-right: 14px;
      svg {
        width: 24px;
      }
    }
  }

  ul {
    transition: 0.3s ease-in-out;
    padding: 40px 15px 30px;
    row-gap: 0;

    @media (max-width: 768px) {
      padding: 36px 5px 40px;
    }

    li {
      margin-bottom: 10px;

      @media (max-width: 1080px) {
        margin-bottom: 10px;
      }

      a {
        width: 100%;
        padding: 10px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 1.125rem;
          font-weight: 500;

          @media (max-width: 1080px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
`
