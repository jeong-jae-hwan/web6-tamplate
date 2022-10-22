import Image from 'next/image'

export default function ImgBox(props) {
  const {
    mediaMobile,
    src,
    alt,
    layout,
    objectFit,
    objectPosition,
    priority,
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
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    borderRadius,
    aspect,
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

  return (
    <div
      css={`
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
        border-radius: ${borderRadius ? borderRadius : '10px'};
        //
        margin-top: ${marginTop};
        margin-bottom: ${marginBottom};
        margin-left: ${marginLeft};
        margin-right: ${marginRight};
        //
        transition: 0.3s ease-in-out;

        span {
          width: 100%;
          height: 100%;
        }

        img {
          width: 100%;
          height: 100%;
          //
          border-radius: ${borderRadius};
          //
          object-fit: ${objectFit};
          aspect-ratio: ${aspect};
          //
          user-select: none;
        }

        @media only screen and (max-width: ${mediaMobile
            ? mediaMobile
            : '768px'}) {
          width: ${m_width};
          max-width: ${m_maxWidth};
          min-width: ${m_minWidth};
          //
          height: ${m_height};
          max-height: ${m_maxHeight};
          min-height: ${m_minHeight};
          //
          margin-top: ${m_marginTop};
          margin-bottom: ${m_marginBottom};
          margin-left: ${m_marginLeft};
          margin-right: ${m_marginRight};
          //
          border-radius: ${m_borderRadius};

          img {
            aspect-ratio: ${m_aspect};
          }
        }
      `}
    >
      <Image
        src={src}
        alt={alt}
        layout={layout}
        objectFit={objectFit}
        objectPosition={objectPosition}
        priority={priority}
      />
    </div>
  )
}
