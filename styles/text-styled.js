import styled from '@emotion/styled'

//
// 텍스트 영역
export const H1 = styled.h1`
  font-size: ${({ size }) => (size ? size : '1.75rem')};
  white-space: pre-line;
`

export const H2 = styled.h2`
  font-size: ${({ size }) => (size ? size : '1.5rem')};
  white-space: pre-line;
`

export const H3 = styled.h3`
  font-size: ${({ size }) => (size ? size : '1.25rem')};
  white-space: pre-line;
`

export const H4 = styled.h4`
  font-size: ${({ size }) => (size ? size : '1.25rem')};
  white-space: pre-line;
`

export const H5 = styled.h5`
  font-size: ${({ size }) => (size ? size : '1.25rem')};
  white-space: pre-line;
`

//
//
export const Title = styled.strong`
  font-size: ${({ size }) => (size ? size : '1.75rem')};
  white-space: pre-line;
`

export const Text = styled.p`
  font-size: ${({ size }) => (size ? size : '0.938rem')};
  white-space: pre-line;

  span {
    font-size: 0.813rem;
    color: #999;
  }
`

export const SubText = styled.p`
  font-size: ${({ size }) => (size ? size : '0.813rem')};
  color: #888;
  white-space: pre-line;
`

//
//
export const Span = styled.span`
  font-size: ${({ size }) => (size ? size : '0.938rem')};
`
