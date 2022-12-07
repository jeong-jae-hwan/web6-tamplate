import Image from 'next/image'
import { css } from '@emotion/react'

//
export default function Photo(props) {
  const {
    imageWidth,
    imageHeight,
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

  const photo = css`
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
  `

  return (
    <div css={photo}>
      <Image
        src={src}
        alt={alt}
        layout={layout}
        objectFit={objectFit}
        objectPosition={objectPosition}
        priority={priority}
        quality={100}
        width={imageWidth}
        height={imageHeight}
      />
    </div>
  )
}
