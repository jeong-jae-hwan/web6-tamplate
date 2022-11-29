/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export default function Picture(props) {
  const {
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
    border,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    aspect,
    objectFit,
    onClick,
  } = props

  const picture = css`
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
    aspect-ratio: ${aspect};
    //
    border: ${border};
    border-radius: ${borderRadius ? borderRadius : '10px'};
    //
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    //
    transition: 0.3s ease-in-out;

    //
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
      //
      user-select: none;
    }
  `

  return (
    <picture css={picture} onClick={onClick}>
      <img src={src} alt={alt} />
    </picture>
  )
}
