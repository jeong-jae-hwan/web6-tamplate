import React from 'react'
import { Label } from 'scss/input-styled/Label'
import styled from 'styled-components'

export default function InputField(props) {
  const {
    children,
    variant,
    label,
    type,
    value,
    onChange,
    onClick,
    ref,
    maxLength,
    placeholder,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    m_marginTop,
    m_marginBottom,
    m_marginLeft,
    m_marginRight,
  } = props

  const Field = styled.div`
    width: 100%;
    //
    display: flex;
    flex-direction: column;
    //
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    //
    user-select: none;

    //
    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      margin-top: ${m_marginTop};
      margin-bottom: ${m_marginBottom};
      margin-left: ${m_marginLeft};
      margin-right: ${m_marginRight};
    }
  `

  //인풋
  const TypeLine = styled.div`
    width: 100%;
    //
    display: flex;
    column-gap: 10px;
    //
    padding: 10px 0 8px;
    //
    border-bottom: 1px solid #e5e5e5;
    user-select: none;

    input {
      width: 100%;
      font-size: 0.938rem;
      border: none;
      outline: none;
    }
  `

  const TypeBox = styled(TypeLine)`
    margin-top: 6px;
    padding: 13px 12px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;

    &:focus {
      border: 1px solid #000;
    }
  `

  return (
    <Field onClick={onClick} ref={ref}>
      <Label>{label}</Label>
      {variant === 'box' ? (
        <TypeBox>{children}</TypeBox>
      ) : (
        <TypeLine>{children}</TypeLine>
      )}
    </Field>
  )
}
