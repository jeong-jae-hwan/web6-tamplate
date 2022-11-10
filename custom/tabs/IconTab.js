import { css } from '@emotion/react'
import styled from '@emotion/styled'

export default function IconTab(props) {
  const {
    sticky,
    children,
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

  const TabStyled = styled.button`
    position: ${position};
    top: ${top};
    bottom: ${bottom};
    left: ${left};
    right: ${right};
    //
    width: ${size ? size : '25px'};
    height: ${size ? size : '25px'};
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
      width: ${size ? size : '25px'};
      height: ${size ? size : '25px'};
    }

    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      width: ${m_size ? m_size : '23px'};
      height: ${m_size ? m_size : '23px'};

      svg {
        width: ${m_size ? m_size : '23px'};
        height: ${m_size ? m_size : '23px'};
      }
    }
  `

  // x버튼 고정 스타일
  const stickyStyles = css`
    z-index: 999;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 14px;
    right: 14px;
    cursor: pointer;
  `

  return (
    <>
      {sticky ? (
        <div css={stickyStyles}>
          <TabStyled type="button" onClick={onClick} ref={ref}>
            {children}
          </TabStyled>
        </div>
      ) : (
        <TabStyled type="button" onClick={onClick} ref={ref}>
          {children}
        </TabStyled>
      )}
    </>
  )
}
