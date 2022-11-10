import styled from '@emotion/styled'
import { css } from '@emotion/react'

//svg
import ToggleIcon from 'public/icons/accordion-icon.svg'

//
export default function AccordionTab(props) {
  const { children, onClick, isActive, size, marginTop, marginBottom } = props

  const Accordion = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 26px;

    padding: 12px;
    border-radius: 8px;

    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};

    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #f8f8f8f8;
    }
  `

  const Title = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
    font-size: 1rem;

    p {
      font-weight: 500;
      font-size: 0.975rem;
    }
  `

  const activeIcon = css`
    transform: ${isActive ? 'rotate(270deg)' : 'rotate(0eg)'};
    transition: 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${size ? size : '13px'};
    height: ${size ? size : '13px'};

    svg {
      width: ${size ? size : '13px'};
      height: ${size ? size : '13px'};
    }
  `

  return (
    <Accordion type="button" onClick={onClick}>
      <Title>{children}</Title>

      <div css={activeIcon}>
        <ToggleIcon />
      </div>
    </Accordion>
  )
}
