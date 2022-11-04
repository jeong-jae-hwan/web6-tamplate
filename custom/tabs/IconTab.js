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
    width,
    height,
    m_width,
    m_height,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLR,
  } = props

  const TabStyled = styled.div`
    position: ${position};
    top: ${top};
    bottom: ${bottom};
    left: ${left};
    right: ${right};
    //
    width: ${width ? width : '25px'};
    height: ${height};
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

    @media only screen and (max-width: ${({ theme }) => theme}) {
      width: ${m_width};
      height: ${m_height};
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
