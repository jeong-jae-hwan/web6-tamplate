import styled from '@emotion/styled'
import { css } from '@emotion/react'

//
export default function AccordionTab(props) {
  const {
    title,
    children,
    onClick,
    isActive,
    size,
    fill,
    marginTop,
    marginBottom,
    hover,
    padding,
    fontWeight,
    fontSize,
    border,
  } = props

  const Accordion = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${padding ? padding : ' 10px 0'};
    border-bottom: ${border};
    border-radius: 8px;

    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};

    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: ${hover && '#f8f8f8f8'};
    }
  `

  const titleStyled = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 26px;
  `

  const Title = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
    font-size: ${fontSize ? fontSize : '1rem'};
    font-weight: ${fontWeight ? fontWeight : '500'};
  `

  const activeIcon = css`
    transform: ${isActive ? 'rotate(270deg)' : 'rotate(0eg)'};
    transition: 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${size ? size : '13px'};
    height: ${size ? size : '13px'};
    fill: ${fill};

    svg {
      width: 100%;
      width: 100%;
      transition: 0.3s ease-in-out;
    }
  `

  return (
    <Accordion type="button" onClick={onClick}>
      <div css={titleStyled}>
        <Title>{title}</Title>
        <button css={activeIcon} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
            <g id="accordion-icon" transform="translate(12) rotate(90)">
              <rect
                id="사각형_8352"
                data-name="사각형 8352"
                width="11.764"
                height="12"
                transform="translate(0.236)"
                fill="none"
              />
              <path
                id="패스_87223"
                data-name="패스 87223"
                d="M11.759,1.312,6.627,5.786A.788.788,0,0,1,5.561,5.8L.243,1.434A.78.78,0,0,1,0,.88.764.764,0,0,1,.233.334.779.779,0,0,1,.773.112h.01A.772.772,0,0,1,1.3.307L6.07,4.188,10.681.206A.8.8,0,0,1,11.76.214a.762.762,0,0,1,.24.55.76.76,0,0,1-.241.549"
                transform="translate(12 9) rotate(180)"
                fill="#999"
              />
            </g>
          </svg>
        </button>
      </div>

      {children}
    </Accordion>
  )
}
