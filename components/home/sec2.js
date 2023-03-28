import React from 'react'

//module
import ScrollContainer from 'react-indiana-drag-scroll'

//styled
import styled from '@emotion/styled'

//svg
import Icon1 from 'public/icons/sec2/icon1.svg'
import Icon2 from 'public/icons/sec2/icon2.svg'
import Icon3 from 'public/icons/sec2/icon3.svg'
import Icon4 from 'public/icons/sec2/icon4.svg'
import Icon5 from 'public/icons/sec2/icon5.svg'
import Icon6 from 'public/icons/sec2/icon6.svg'
import Icon7 from 'public/icons/sec2/icon7.svg'
import Icon8 from 'public/icons/sec2/icon8.svg'

//
export default function Sec2({ contectRef }) {
  const items1 = [
    {
      icon: Icon1,
      title: '블록체인',
      text: 'Chakra UI strictly follows WAI-ARIA standards for all components.',
    },
    {
      icon: Icon2,
      title: 'WEB 3.0',
      text: 'Chakra UI strictly follows WAI-ARIA standards for all components.',
    },
    {
      icon: Icon3,
      title: '리엑트 REACT.JS',
      text: 'Chakra UI strictly follows WAI-ARIA standards for all components.',
    },
    {
      icon: Icon4,
      title: '노드 NODE.js',
      text: 'Chakra UI strictly follows WAI-ARIA standards for all components.',
    },
  ]

  const items2 = [
    {
      icon: Icon5,
      title: '데이터베이스',
      text: 'Chakra UI strictly follows WAI-ARIA standards for all components.',
    },
    {
      icon: Icon6,
      title: '이더리움',
      text: 'Chakra UI strictly follows WAI-ARIA standards for all components.',
    },
    {
      icon: Icon7,
      title: '지갑 및 메타마스크',
      text: 'Chakra UI strictly follows WAI-ARIA standards for all components.',
    },
    {
      icon: Icon8,
      title: '시세 및 차트',
      text: 'Chakra UI strictly follows WAI-ARIA standards for all components.',
    },
  ]

  return (
    <View ref={contectRef}>
      <Title>카테고리</Title>
      <Text>
        {'딥팩토리 WEB 3.0에서 제공하는\n 다양한 콘텐츠를 확인하세요!'}
      </Text>

      <ScrollContainer className="items">
        <Items>
          {items1.map((item, i) => {
            return (
              <Item key={i} data-aos="fade">
                <item.icon />
                <span>{item.title}</span>
                <p>{item.text}</p>
              </Item>
            )
          })}
        </Items>

        <Items>
          {items2.map((item, i) => {
            return (
              <Item key={i} data-aos="fade" data-aos-delay="200">
                <item.icon />
                <span>{item.title}</span>
                <p>{item.text}</p>
              </Item>
            )
          })}
        </Items>
      </ScrollContainer>
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  max-width: 1250px;
  padding: 140px 25px 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    padding: 80px 25px 160px;
  }

  @media (max-width: 600px) {
    padding: 60px 25px 100px;
  }

  .items {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    column-gap: 30px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 1200px) {
      row-gap: 20px;
      column-gap: 20px;
    }
  }
`

const Title = styled.strong`
  font-size: 28px;
  color: #e0e0e0;
`

const Text = styled.p`
  font-size: 15px;
  color: #aaa;
  margin: 12px 0 30px;
  line-height: 1.4;

  @media (max-width: 600px) {
    white-space: pre-line;
  }
`

const Items = styled.ul`
  display: flex;
  row-gap: 30px;
  column-gap: 30px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1200px) {
    row-gap: 20px;
    column-gap: 20px;
  }
`

const Item = styled.li`
  width: 100%;
  max-width: calc(100% / 4 - 23px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  background-color: #212121;
  border-radius: 10px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1200px) {
    width: 100%;
    min-width: 240px;
  }

  svg {
    margin-bottom: 4px;
  }

  span {
    font-size: 16px;
    white-space: nowrap;
  }

  p {
    font-size: 14px;
    color: #aaa;
    white-space: pre-line;
  }
`
