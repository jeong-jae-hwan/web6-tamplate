import React, { useState } from 'react'
import Image from 'next/image'

//styled
import styled from '@emotion/styled'

//module
import ScrollContainer from 'react-indiana-drag-scroll'

//png
import img1 from 'public/images/sec3/img1.png'
import img2 from 'public/images/sec3/img2.png'
import img3 from 'public/images/sec3/img3.png'

//
export default function Sec3({ contectRef }) {
  const contents = [
    {
      img: img1,
      title: '우리는 누구보다 트랜드해',
    },
    {
      img: img2,
      title: '쉬운 결제, 정확한 정산, 빠른 시스템',
    },
    {
      img: img3,
      title: '우리의 시간은 지금부터',
    },
  ]
  // data-aos="fade" data-aos-delay="100"

  return (
    <View ref={contectRef}>
      <Box data-aos="fade">
        <strong>{'대기업부터 1인 기업까지\n1만 기업의 선택'}</strong>
        <p>지금 이시간에도 BRAND를 찾고있습니다.</p>

        <ScrollContainer className="contents">
          {contents.map((item, i) => {
            return (
              <Item key={i}>
                <Image src={item.img} alt={item.title} />
                <h6>{item.title}</h6>
              </Item>
            )
          })}
        </ScrollContainer>
      </Box>
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 25px;
  transition: 0.3s ease-in-out;
  background-color: #f8fbff;

  @media (max-width: 1080px) {
    padding: 80px 25px;
  }

  @media (max-width: 600px) {
    padding: 80px 25px;
  }
`

const Box = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease-in-out;

  .contents {
    width: 100%;
    display: flex;
    overflow: auto;
    cursor: grab;
    column-gap: 40px;
    transition: 0.3s ease-in-out;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 1080px) {
      column-gap: 30px;
    }

    @media (max-width: 600px) {
      column-gap: 20px;
    }
  }

  strong {
    font-size: 36px;
    white-space: pre-line;

    @media (max-width: 1080px) {
      font-size: 30px;
    }

    @media (max-width: 600px) {
      font-size: 26px;
    }
  }

  p {
    font-size: 16px;
    color: #797979;
    margin: 30px 0 40px;

    @media (max-width: 1080px) {
      margin: 20px 0 30px;
    }

    @media (max-width: 600px) {
      font-size: 15px;
    }
  }
`

const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3 - 20px);
  min-width: 340px;

  @media (max-width: 600px) {
    width: 280px;
    min-width: 280px;
  }

  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;

    @media (max-width: 1080px) {
      height: 220px;
    }

    @media (max-width: 600px) {
      height: 200px;
    }
  }

  h6 {
    font-size: 16px;

    font-weight: 500;
  }
`
