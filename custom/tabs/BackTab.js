import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'

//
export default function BackTab(props) {
  const {
    ref,
    onClick,
    isActive,
    position,
    top,
    bottom,
    left,
    right,
    size,
    m_size,
    fill,

    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLR,
  } = props

  //styled
  const divStyled = css`
    padding: 4px 2px;
  `

  const TabStyled = styled.button`
    position: ${position};
    top: ${top};
    bottom: ${bottom};
    left: ${left};
    right: ${right};
    //
    width: ${size ? size : '18px'};
    height: ${size ? size : '18px'};
    //
    display: flex;
    justify-content: center;
    align-items: center;
    //
    rotate: ${isActive && '180deg'};
    //
    user-select: none;
    transition: 0.3s ease-in-out;
    //
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    //
    padding-top: ${paddingTop};
    padding-bottom: ${paddingBottom};
    padding-left: ${paddingLR};
    padding-right: ${paddingLR};

    svg {
      width: 100%;
      height: 100%;
      fill: ${fill};
      transition: 0.3s ease-in-out;
    }

    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      width: ${m_size};
      height: ${m_size};

      svg {
        width: 100%;
        height: 100%;
      }
    }
  `

  // onClick
  const router = useRouter()
  const handelBack = i => {
    if (onClick) {
      onClick()
    } else {
      router.back()
    }
  }

  return (
    <div css={divStyled}>
      <TabStyled type="button" onClick={handelBack} ref={ref}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
          <g id="back-icon" transform="translate(-216 -86)">
            <rect
              id="사각형_8376"
              data-name="사각형 8376"
              width="22"
              height="22"
              transform="translate(216 86)"
              fill="none"
              opacity="0"
            />
            <path
              id="패스_32763"
              data-name="패스 32763"
              d="M21.558,2.406l-9.408,8.2a1.445,1.445,0,0,1-1.955.024l-9.749-8A1.429,1.429,0,0,1,0,1.614a1.4,1.4,0,0,1,.427-1A1.428,1.428,0,0,1,1.416.206h.019a1.416,1.416,0,0,1,.953.356l8.739,7.117,8.454-7.3A1.463,1.463,0,0,1,21.56.392,1.4,1.4,0,0,1,22,1.4a1.394,1.394,0,0,1-.442,1.006"
              transform="translate(232 86) rotate(90)"
            />
          </g>
        </svg>
      </TabStyled>
    </div>
  )
}
