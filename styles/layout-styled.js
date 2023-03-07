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

///////
/////////
export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

///////
/////////
export const Row = styled(Box)`
  flex-direction: row;
  column-gap: 10px;
  align-items: ${({ center }) => (center ? 'center' : 'stretch')};
  align-items: ${({ start }) => (start ? 'start' : 'stretch')};
  align-items: ${({ end }) => (end ? 'end' : 'stretch')};
`

///////
/////////
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`
