import styled from '@emotion/styled'

export default function Button(props) {
  const {
    children,
    disabled,
    type,
    onClick,
    stroke,
    maxWidth,
    minWidth,
    height,
    padding,
    margin,
    fontSize,
    fontWeight,
    fill,
    hoverFill,
    boxShadow,
    color,
    border,
    hoverBorder,
    m_padding,
    m_margint,
  } = props

  const Tab = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: padding;
    //
    width: 100%;
    max-width: ${maxWidth};
    min-width: ${minWidth};
    height: ${height};
    //
    padding: ${padding ? padding : '0.938em'};
    margin: ${margin};
    //
    font-size: ${fontSize ? fontSize : '1rem'};
    font-weight: ${fontWeight ? fontWeight : 400};
    //
    background-color: ${fill ? fill : '#333'};
    color: ${color ? color : '#fff'};
    //
    border-radius: 14px;
    box-shadow: ${boxShadow && '0 3px 20px rgba(0,0,0,0.2)'};
    //
    transition: all 0.3s ease-in-out;
    user-select: none;
    cursor: pointer;

    &:hover {
      background-color: ${hoverFill ? hoverFill : '#212229'};
    }

    &:disabled {
      color: #b2b2b2;
      background-color: #e2e2e2;
      box-shadow: none;
    }

    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      padding: ${m_padding};
      margin: ${m_margint};
    }
  `

  const Stroke = styled(Tab)`
    background-color: transparent;
    color: ${color ? color : '#333'};
    border: 1px solid ${border ? border : '#333'};

    &:hover {
      background-color: ${hoverFill ? hoverFill : '#f5f5f5'};
      border: 1px solid ${hoverBorder ? hoverBorder : '#999'};
    }
  `

  return (
    <>
      {!stroke && (
        <Tab
          disabled={disabled}
          type={type ? type : 'button'}
          onClick={onClick}
        >
          {children}
        </Tab>
      )}
      {stroke && (
        <Stroke
          disabled={disabled}
          type={type ? type : 'button'}
          onClick={onClick}
        >
          {children}
        </Stroke>
      )}
    </>
  )
}
