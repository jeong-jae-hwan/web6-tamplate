import styled from '@emotion/styled'

// 라인 형태의 인풋 스타일
export const InputLine = styled.div`
  width: ${({ width }) => (width ? width : '100%')};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin};

  label {
    white-space: nowrap;
    width: 100%;
    font-size: 0.813rem;
    color: #666;
    display: flex;
    column-gap: 0.308em;

    span {
      display: flex;
      color: ${({ important }) => (important ? '#fc4848' : '#4baafc')};
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    padding: 8px 0;
    border-bottom: 1px solid #e5e5e5;

    input {
      width: 100%;
      font-size: ${({ fontSize }) => (fontSize ? fontSize : '0.938rem')};
    }

    select {
      width: 100%;
      -webkit-appearance: none; /* for chrome */
      -moz-appearance: none; /*for firefox*/
      appearance: none;
      font-size: ${({ fontSize }) => (fontSize ? fontSize : '0.938rem')};
    }

    textarea {
      width: 100%;
      height: 100%;
      font-size: ${({ fontSize }) => (fontSize ? fontSize : '0.938rem')};
    }

    button {
      white-space: nowrap;
      font-size: 0.813rem;
      font-weight: 500;
      color: ${({ isActive }) => (isActive ? '#c2c2c2' : '#1F8DFF')};
      padding: 2px 4px;
    }

    svg {
      width: 16px;
      height: 16px;
    }

    span {
      font-size: 0.813rem;
      color: #aaa;
    }
  }

  span {
    width: 100%;
    font-size: 0.7rem;
    white-space: pre-line;
    display: ${({ validation }) => (validation ? 'flex' : 'none')};
    margin-top: 4px;
  }

  .error {
    color: #ff4558;
  }

  .info {
    color: #1b7eff;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    max-width: ${({ m_maxWidth }) => m_maxWidth};
    min-width: ${({ m_minWidth }) => m_minWidth};
  }
`

//
//
// 박스 형태의 인풋 스타일
export const InputBox = styled.div`
  width: ${({ width }) => (width ? width : '100%')};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin};

  label {
    width: 100%;
    font-size: 0.813rem;
    color: #666;
    display: flex;
    column-gap: 0.308em;

    span {
      display: flex;
      color: ${({ important }) => (important ? '#fc4848' : '#4baafc')};
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    padding: 12px 6px 12px 12px;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    margin-top: 4px;

    input {
      width: 100%;
      font-size: ${({ fontSize }) => (fontSize ? fontSize : '0.938rem')};
    }

    select {
      width: 100%;
      -webkit-appearance: none; /* for chrome */
      -moz-appearance: none; /*for firefox*/
      appearance: none;
      font-size: ${({ fontSize }) => (fontSize ? fontSize : '0.938rem')};
    }

    textarea {
      width: 100%;
      height: 100%;
      font-size: ${({ fontSize }) => (fontSize ? fontSize : '0.938rem')};
    }

    button {
      white-space: nowrap;
      font-size: 0.813rem;
      font-weight: 500;
      color: ${({ isActive }) => (isActive ? '#c2c2c2' : '#1F8DFF')};
      padding: 2px 4px;
    }

    svg {
      width: 16px;
      height: 16px;
    }

    span {
      font-size: 0.813rem;
      color: #aaa;
    }
  }

  span {
    width: 100%;
    font-size: 0.7rem;
    white-space: pre-line;
    display: ${({ validation }) => (validation ? 'flex' : 'none')};
    margin-top: 4px;
  }

  .error {
    color: #ff4558;
  }

  .info {
    color: #1b7eff;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    max-width: ${({ m_maxWidth }) => m_maxWidth};
    min-width: ${({ m_minWidth }) => m_minWidth};
  }
`
