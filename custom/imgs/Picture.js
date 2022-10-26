export default function Picture(props) {
  const {
    mediaMobile,
    src,
    alt,
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
    borderRadius,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    aspect,
    objectFit,
    m_width,
    m_maxWidth,
    m_minWidth,
    m_height,
    m_maxHeight,
    m_minHeight,
    m_marginTop,
    m_marginBottom,
    m_marginLeft,
    m_marginRight,
    m_borderRadius,
    m_aspect,
  } = props

  const breakpoints = [mediaMobile, 768, 992, 1200]

  const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

  const pictureStyled = {
    position: position,
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    //
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //
    width: `${width ? width : '100%'}`,
    maxWidth: maxWidth,
    minWidth: minWidth,
    //
    height: height,
    maxHeight: maxHeight,
    minHeight: minHeight,
    //
    borderRadius: `${borderRadius ? borderRadius : '10px'}`,
    //
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginRight: marginRight,
    marginLeft: marginLeft,
    //
    transition: '0.3s ease-in-out',
    //
    [mq[0]]: {
      width: m_width,
      maxWidth: m_maxWidth,
      minWidth: m_minWidth,
      //
      height: m_height,
      maxHeight: m_maxHeight,
      minHeight: m_minHeight,
      //
      marginTop: m_marginTop,
      marginBottom: m_marginBottom,
      marginRight: m_marginRight,
      marginLeft: m_marginLeft,
      //
      borderRadius: m_borderRadius,
    },
  }

  const imgStyles = {
    width: '100%',
    //
    height: height,
    maxHeight: maxHeight,
    minHeight: minHeight,
    //
    borderRadius: `${borderRadius ? borderRadius : '10px'}`,
    //
    objectFit: objectFit,
    aspectRatio: aspect,
    //
    userSelect: 'none',
    //
    transition: '0.3s ease-in-out',

    [mq[0]]: {
      height: m_height,
      maxHeight: m_maxHeight,
      minHeight: m_minHeight,
      //
      aspectRatio: m_aspect,
    },
  }

  return (
    <picture css={pictureStyled}>
      <img src={src} alt={alt} css={imgStyles} />
    </picture>
  )
}
