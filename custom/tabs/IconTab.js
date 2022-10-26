import { css } from '@emotion/react'

export default function IconTab(props) {
  const {
    sticky,
    mediaMobile,
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
  } = props

  const tabStyled = css`
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
    @media (max-width: ${mediaMobile ? mediaMobile : '768px'}) {
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
  `

  return (
    <>
      {sticky ? (
        <div css={stickyStyles}>
          <button type="button" onClick={onClick} ref={ref} css={tabStyled}>
            {children}
          </button>
        </div>
      ) : (
        <button type="button" onClick={onClick} ref={ref} css={tabStyled}>
          {children}
        </button>
      )}
    </>
  )
}
