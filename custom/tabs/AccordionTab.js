import { css } from '@emotion/react'
import { Title } from 'styles/text-styled'
import { Box, Row } from 'styles/layout-styled'

//
export default function AccordionTab(props) {
  const {
    title,
    children,
    onClick,
    isActive,
    size,
    marginTop,
    marginBottom,
    hover,
    padding,
    fontWeight,
    fontSize,
    border,
  } = props

  const styles = {
    wrap: css`
      width: 100%;
      border-bottom: ${border};
      margin-top: ${marginTop};
      margin-bottom: ${marginBottom};
      cursor: pointer;
    `,

    row: css`
      justify-content: space-between;
      column-gap: 16px;
      padding: ${padding ? padding : '14px 12px'};
      border-radius: 8px;
      &:hover {
        background-color: ${hover ? hover : '#f8f8f8'};
      }
    `,

    title: css`
      font-size: ${fontSize ? fontSize : '1rem'};
      font-weight: ${fontWeight ? fontWeight : '500'};
    `,

    children: css`
      height: ${isActive && 'auto'};
      max-height: ${isActive ? '999px' : 0};
      overflow: hidden;
      transition: all 0.5s ease-in-out;
    `,
  }

  return (
    <Box type="button" onClick={onClick} css={styles.wrap}>
      <Row center={true} css={styles.row}>
        <Title css={styles.title}>{title}</Title>

        <AccordionIcon isActive={isActive} size={size} />
      </Row>

      <Box css={styles.children}>{children}</Box>
    </Box>
  )
}

// 아이콘
const AccordionIcon = ({ isActive, size }) => {
  return (
    <button
      type="button"
      css={css`
        transform: ${isActive ? 'rotate(-90deg)' : 'rotate(0eg)'};
        transition: 0.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${size ? size : '13px'};
        height: ${size ? size : '13px'};
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        css={css`
          width: 100%;
          width: 100%;
          transition: 0.3s ease-in-out;
        `}
      >
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
  )
}

//
//styled
