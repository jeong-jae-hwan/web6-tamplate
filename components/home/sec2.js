import React, { useState } from 'react'
import Image from 'next/image'

//styled
import styled from '@emotion/styled'

//module
import ScrollContainer from 'react-indiana-drag-scroll'

//png
import img1 from 'public/images/sec2/img1.png'
import img2 from 'public/images/sec2/img2.png'
import img3 from 'public/images/sec2/img3.png'
import img4 from 'public/images/sec2/img4.png'
import img5 from 'public/images/sec3/img1.png'
import img6 from 'public/images/sec3/img2.png'
import img7 from 'public/images/sec3/img3.png'
import img8 from 'public/images/sec3/img4.png'

//
export default function Sec2({ contectRef }) {
  const [isActive, setIsActive] = useState(0)

  const menus = ['순수미술', '일러스트', '아트', '그래픽']
  const contents = {
    item1: [
      {
        img: img1,
        title: '순수미술 임시이름',
        text: '국립현대미술관 큐레이터의 설명으로 보는 <모던 데자인: 생활, 산업, 외교하는 미술로>',
        tag: '#모집중',
      },
      {
        img: img2,
        title: '순수미술 임시이름',
        text: '국립현대미술관 큐레이터의 설명으로 보는 <모던 데자인: 생활, 산업, 외교하는 미술로>',
        tag: '#전시예정 : 2023.03.03',
      },
      {
        img: img3,
        title: '순수미술 임시이름',
        text: '국립현대미술관 큐레이터의 설명으로 보는 <모던 데자인: 생활, 산업, 외교하는 미술로>',
        tag: '#전시예정 : 2023.03.03',
      },
      {
        img: img4,
        title: '순수미술 임시이름',
        text: '국립현대미술관 큐레이터의 설명으로 보는 <모던 데자인: 생활, 산업, 외교하는 미술로>',
        tag: '#전시예정 : 2023.03.03',
      },
    ],
    item2: [
      {
        img: img5,
        title: '일러스트 임시이름',
        text: '국립현대미술관 큐레이터의 설명으로 보는 <모던 데자인: 생활, 산업, 외교하는 미술로>',
        tag: '#모집중',
      },
      {
        img: img6,
        title: '일러스트 임시이름',
        text: '국립현대미술관 큐레이터의 설명으로 보는 <모던 데자인: 생활, 산업, 외교하는 미술로>',
        tag: '#전시예정 : 2023.03.03',
      },
      {
        img: img7,
        title: '일러스트 임시이름',
        text: '국립현대미술관 큐레이터의 설명으로 보는 <모던 데자인: 생활, 산업, 외교하는 미술로>',
        tag: '#전시예정 : 2023.03.03',
      },
      {
        img: img8,
        title: '일러스트 임시이름',
        text: '국립현대미술관 큐레이터의 설명으로 보는 <모던 데자인: 생활, 산업, 외교하는 미술로>',
        tag: '#전시예정 : 2023.03.03',
      },
    ],
  }

  return (
    <View ref={contectRef}>
      <Title data-aos="fade">전시</Title>
      <Menus>
        {menus.map((item, i) => {
          return (
            <Menu
              data-aos="fade"
              data-aos-delay="150"
              type="button"
              key={i}
              isActive={isActive === i}
              onClick={() => setIsActive(i)}
            >
              {item}
            </Menu>
          )
        })}
      </Menus>

      <ScrollContainer
        className="contents"
        data-aos="fade"
        data-aos-delay="300"
      >
        {isActive === 0 && (
          <>
            {contents.item1.map((item, i) => {
              return (
                <Item key={i}>
                  <Image src={item.img} alt={item.title} />
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                  <span>{item.tag}</span>
                </Item>
              )
            })}
          </>
        )}

        {isActive === 1 && (
          <>
            {contents.item2.map((item, i) => {
              return (
                <Item key={i}>
                  <Image src={item.img} alt={item.title} />
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                  <span>{item.tag}</span>
                </Item>
              )
            })}
          </>
        )}

        {isActive === 2 && (
          <>
            {contents.item1.map((item, i) => {
              return (
                <Item key={i}>
                  <Image src={item.img} alt={item.title} />
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                  <span>{item.tag}</span>
                </Item>
              )
            })}
          </>
        )}

        {isActive === 3 && (
          <>
            {contents.item2.map((item, i) => {
              return (
                <Item key={i}>
                  <Image src={item.img} alt={item.title} />
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                  <span>{item.tag}</span>
                </Item>
              )
            })}
          </>
        )}
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
  padding: 140px 25px 150px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    padding: 80px 0;
  }

  @media (max-width: 600px) {
    padding: 60px 0 80px;
  }

  .contents {
    width: 100%;
    display: flex;
    column-gap: 40px;
    margin-top: 40px;
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

const Menus = styled.div`
  width: 100%;
  padding: 24px 0 0;
  display: flex;
  align-items: stretch;
  column-gap: 50px;
  border-bottom: 1px solid #e2e2e2;

  @media (max-width: 1080px) {
    padding: 24px 25px 0;
    column-gap: 40px;
  }

  @media (max-width: 600px) {
    column-gap: 30px;
  }
`

const Menu = styled.button`
  font-size: 16px;
  padding-bottom: 14px;
  color: ${({ isActive }) => (isActive ? '#333' : '#999')};
  font-weight: ${({ isActive }) => (isActive ? '500' : '400')};
  border-bottom: ${({ isActive }) =>
    isActive ? '3px solid #333' : '3px solid #fff'};
  transition: 0.3s ease-in-out;

  @media (max-width: 600px) {
    font-size: 15px;
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

  span {
    font-size: 13px;
    color: #3788f4;
  }
`
