import styled from '@emotion/styled'

//
export default function Button(props) {
  const {
    children,
    ref,
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
    hoverStroke,
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

  const TabBox = styled.div`
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
    width: ${width ? width : '100%'};
    max-width: ${maxWidth};
    min-width: ${minWidth};
    //
    height: ${height};
    max-height: ${maxHeight};
    min-height: ${minHeight};
    //
    padding-top: ${paddingTB ? paddingTB : '1em'};
    padding-bottom: ${paddingTB ? paddingTB : '1em'};
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
    box-shadow: ${boxShadow && '0 3px 20px rgba(0,0,0,0.2)'};
    //
    background-color: ${variant === 'stroke'
      ? '#fff'
      : `${fill ? fill : '#333'}`};
    color: ${variant === 'stroke'
      ? `${color ? color : '#333'}`
      : `${color ? color : '#f0f0f0'}`};
    border: ${variant === 'stroke' && `1px solid ${storke ? storke : '#333'}`};
    //
    user-select: none;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    //
    &:hover {
      background-color: ${variant === 'stroke'
        ? '#f0f0f0'
        : `${hoverFill ? hoverFill : '#212229'}`};
      border: ${variant === 'stroke' &&
      `1px solid ${hoverStroke ? hoverStroke : '#f0f0f0'}`};
    }

    &:disabled {
      cursor: auto;
      color: ${variant === 'stroke' ? '#c2c2c2' : '#b2b2b2'};
      background-color: ${variant === 'stroke' ? 'transparent' : '#e2e2e2'};
      border: ${variant === 'stroke' && '1px solid #ccc'};
    }

    &:focus {
      background-color: ${variant === 'stroke'
        ? '#f0f0f0'
        : `${hoverFill ? hoverFill : '#212229'}`};
      border: ${variant === 'stroke' &&
      `1px solid ${hoverStroke ? hoverStroke : '#f0f0f0'}`};
    }

    //
    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
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

  return (
    <TabBox
      disabled={disabled}
      type={type ? type : 'button'}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </TabBox>
  )
}
