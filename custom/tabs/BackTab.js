import styled from '@emotion/styled'
import { css } from '@emotion/react'

//svg
import BackIcon from 'public/icons/back-icon.svg'

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
      width: ${size ? size : '18px'};
      height: ${size ? size : '18px'};
    }

    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      width: ${m_size};
      height: ${m_size};

      svg {
        width: ${m_size};
        height: ${m_size};
      }
    }
  `

  return (
    <div css={divStyled}>
      <TabStyled type="button" onClick={onClick} ref={ref}>
        <BackIcon />
      </TabStyled>
    </div>
  )
}
