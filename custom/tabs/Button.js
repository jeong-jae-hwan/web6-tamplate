import styled from 'styled-components'

export default function Button(props) {
  const {
    children,
    type,
    disabled,
    variant,
    onClick,
    position,
    left,
    right,
    top,
    bottom,
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    paddingLR,
    paddingTB,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    fontSize,
    fontWeight,
    boxShadow,
    fill,
    hoverFill,
    storke,
    color,
    borderRadius,
    m_width,
    m_maxWidth,
    m_minWidth,
    m_height,
    m_maxHeight,
    m_minHeight,
    m_paddingTB,
    m_paddingLR,
    m_marginTop,
    m_marginBottom,
    m_marginLeft,
    m_marginRight,
    m_fontSize,
    m_borderRadius,
  } = props

  const Button = styled.button`
    position: ${position};
    top: ${top};
    bottom: ${bottom};
    right: ${right};
    left: ${left};
    //
    display: flex;
    align-items: center;
    justify-content: center;
    //
    width: ${width ? width : 'auto'};
    max-width: ${maxWidth};
    min-width: ${minWidth};
    //
    height: ${height};
    max-height: ${maxHeight};
    min-height: ${minHeight};
    //
    padding-top: ${paddingTB ? paddingTB : '0.875em'};
    padding-bottom: ${paddingTB ? paddingTB : '0.875em'};
    padding-left: ${paddingLR ? paddingLR : '1.375em'};
    padding-right: ${paddingLR ? paddingLR : '1.375em'};
    //
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    //
    font-size: ${fontSize ? fontSize : '1rem'};
    font-weight: ${fontWeight ? fontWeight : 400};
    //
    border-radius: ${borderRadius ? borderRadius : '1em'};
    box-shadow: ${boxShadow && '0 3px 20px rgba(0,0,0,0.11)'};
    //
    background-color: ${fill ? fill : '#333'};
    color: #f0f0f0;
    //
    transition: 0.3s ease-in-out;

    //
    &:hover {
      background-color: ${hoverFill ? hoverFill : '#232429'};
    }

    &:disabled {
      cursor: auto;
      color: #a0a0a0;
      background-color: #e0e0e0;
    }

    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      //
      width: ${m_width};
      max-width: ${m_maxWidth};
      min-width: ${m_minWidth};
      //
      height: ${m_height};
      max-height: ${m_maxHeight};
      min-height: ${m_minHeight};
      //
      padding-top: ${m_paddingTB};
      padding-bottom: ${m_paddingTB};
      padding-left: ${m_paddingLR};
      padding-right: ${m_paddingLR};
      //
      margin-top: ${m_marginTop};
      margin-bottom: ${m_marginBottom};
      margin-left: ${m_marginLeft};
      margin-right: ${m_marginRight};
      //
      font-size: ${m_fontSize};
      //
      border-radius: ${m_borderRadius};
    }
  `

  const ButtonStroke = styled(Button)`
    border: 1px solid ${storke ? storke : '#333'};
    color: ${color ? color : '#333'};
    background-color: #fff;

    //
    &:hover {
      background-color: ${hoverFill ? hoverFill : '#F7F7F7'};
    }

    &:disabled {
      cursor: auto;
      color: #c2c2c2;
      background-color: transparent;
      border: 1px solid ${storke ? storke : '#ccc'};
    }
  `

  return (
    <>
      {variant === 'stroke' ? (
        <ButtonStroke disabled={disabled} type={type} onClick={onClick}>
          {children}
        </ButtonStroke>
      ) : (
        <Button type={type} disabled={disabled} onClick={onClick}>
          {children}
        </Button>
      )}
    </>
  )
}
