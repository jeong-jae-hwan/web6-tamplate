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
import img4 from 'public/images/sec3/img4.png'

//
export default function Sec3({ contectRef }) {
  const contents = [
    {
      img: img1,
      title: '포커스',
      text: '그 많던 전시는 다 어디로 갔을까 <전시의 전시>',
    },
    {
      img: img2,
      title: '포터리',
      text: '설명으로 보는 <모던 데자인: 생활, 산업, 외교하는 미술로>',
    },
    {
      img: img3,
      title: '포커스',
      text: '그 많던 전시는 다 어디로 갔을까 <전시의 전시>',
    },
    {
      img: img4,
      title: '포터리',
      text: '설명으로 보는 <모던 데자인: 생활, 산업, 외교하는 미술로>',
    },
  ]

  return (
    <View ref={contectRef}>
      <Title data-aos="fade">뉴스레터</Title>

      <ScrollContainer className="contents">
        {contents.map((item, i) => {
          return (
            <Item key={i} data-aos="fade" data-aos-delay="200">
              <Image src={item.img} alt={item.title} />
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </Item>
          )
        })}
      </ScrollContainer>
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  padding: 40px 25px 20px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    padding: 40px 0;
  }

  @media (max-width: 600px) {
    padding: 20px 0 20px;
  }

  .contents {
    width: 100%;
    display: flex;
    column-gap: 40px;
    margin-top: 30px;
    overflow: auto;
    cursor: grab;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 1080px) {
      padding: 0 25px;
      column-gap: 30px;
      margin-top: 30px;
    }

    @media (max-width: 600px) {
      column-gap: 20px;
    }
  }
`

const Title = styled.h2`
  font-size: 28px;

  @media (max-width: 1080px) {
    padding: 0 25px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`

const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 305px;
  min-width: 300px;

  @media (max-width: 600px) {
    width: 280px;
    min-width: 280px;
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;

    @media (max-width: 600px) {
      height: 200px;
    }
  }

  h6 {
    font-size: 16px;
    margin: 20px 0 12px;
    font-weight: 500;
  }

  p {
    font-size: 14px;
    color: #797979;
    margin-bottom: 8px;
    white-space: pre-line;
  }
`
