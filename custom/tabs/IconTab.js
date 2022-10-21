import styled from 'styled-components'

export default function IconTab(props) {
  const {
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

  const IconTab = styled.button`
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

    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      width: ${m_width};
      height: ${m_height};
    }
  `

  return (
    <IconTab type="button" onClick={onClick} ref={ref}>
      {children}
    </IconTab>
  )
}
