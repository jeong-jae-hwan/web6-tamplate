import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ gap }) => gap};
  padding-right: ${({ paddingLR }) => paddingLR};
  padding-left: ${({ paddingLR }) => paddingLR};
  padding-top: ${({ paddingT }) => paddingT};
  padding-bottom: ${({ paddingB }) => paddingB};
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ mHeight }) => mHeight};
    padding-right: 20px;
    padding-left: 20px;
    padding-top: ${({ mPaddingT }) => mPaddingT};
    padding-bottom: ${({ mPaddingB }) => mPaddingB};
    column-gap: ${({ gap }) => gap};
  }
`

export const WrapperRow = styled(Wrapper)`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: row;
  column-gap: ${({ gap }) => gap};

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ mHeight }) => mHeight};
    padding-right: 20px;
    padding-left: 20px;
    padding-top: ${({ mPaddingT }) => mPaddingT};
    padding-bottom: ${({ mPaddingB }) => mPaddingB};
    column-gap: ${({ gap }) => gap};
  }
`

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  transition: 0.3s ease-in-out;
  border-bottom: ${({ isFixed }) => isFixed && '1px solid #ccc'};

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ mHeight }) => mHeight};
  }
`
