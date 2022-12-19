import styled from '@emotion/styled'

export const Section = styled.section`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => (padding ? padding : '60px 0 100px')};
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    padding: 40px 0 70px;
  }
`
