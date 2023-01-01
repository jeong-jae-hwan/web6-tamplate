import styled from '@emotion/styled'

export const DrawerBox = styled.div`
  z-index: 9990;
  //
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

  @media only screen and (max-width: 1080px) {
    max-width: 320px;
  }
`

export const Memu = styled.ul`
  transition: 0.3s ease-in-out;
  padding: 40px 15px 30px;

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
`
