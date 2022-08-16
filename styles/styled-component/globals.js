import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: ${({ pLR }) => pLR};
  padding-left: ${({ pLR }) => pLR};
  padding-top: ${({ pT }) => pT};
  padding-bottom: ${({ pB }) => pB};

  @media screen and (max-width: ${({ mediaWidth }) =>
      mediaWidth ? mediaWidth : '600px'}) {
    height: ${({ mHeight }) => mHeight};
    padding-right: 20px;
    padding-left: 20px;
    padding-top: ${({ mobilePT }) => mobilePT};
    padding-bottom: ${({ mobilePB }) => mobilePB};
  }
`

export const ImgBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};

  img {
    width: 100%;
  }
`

export const Button = styled.button`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '200px')};
  height: ${({ height }) => (height ? height : '54px')};
  background-color: ${({ bg }) => (bg ? bg : '#333')};
  color: ${({ color }) => (color ? color : '#fff')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '100px'};
  border: none;
  box-shadow: ${({ boxShadow }) => boxShadow && '0 3px 20px rgba(0,0,0,0.011)'};
  font-size: 18px;

  &:hover {
    background-color: ${({ bg }) => (bg ? bg : '#444')};
    box-shadow: none;
  }
`
