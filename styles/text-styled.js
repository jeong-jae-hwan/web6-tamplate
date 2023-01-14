import styled from '@emotion/styled'

//
// 텍스트 영역
export const H1 = styled.h1`
  font-size: ${({ size }) => (size ? size : '1.75rem')};
`

export const H2 = styled.h2`
  font-size: ${({ size }) => (size ? size : '1.5rem')};
`

export const H3 = styled.h3`
  font-size: ${({ size }) => (size ? size : '1.25rem')};
`

export const H4 = styled.h4`
  font-size: ${({ size }) => (size ? size : '1.25rem')};
`

export const H5 = styled.h5`
  font-size: ${({ size }) => (size ? size : '1.25rem')};
`

//
//
export const Title = styled.strong`
  font-size: ${({ size }) => (size ? size : '1.75rem')};
`

export const Text = styled.p`
  font-size: ${({ size }) => (size ? size : '0.938rem')};

  span {
    font-size: 0.813rem;
    color: #999;
  }
`

export const SubText = styled.p`
  font-size: ${({ size }) => (size ? size : '0.813rem')};
  color: #888;
`

//
//
export const Span = styled.span`
  font-size: ${({ size }) => (size ? size : '0.938rem')};
`
