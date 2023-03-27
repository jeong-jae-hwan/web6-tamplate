import React from 'react'

//style
import styled from '@emotion/styled'

//svg
import Icon1 from 'public/icons/sec2-icon1.svg'
import Icon2 from 'public/icons/sec2-icon2.svg'
import Icon3 from 'public/icons/sec2-icon3.svg'
import Icon4 from 'public/icons/sec2-icon4.svg'

//
export default function Sec2() {
  const items = [
    {
      icon: Icon1,
      title: '첫번째 타이틀',
      subTitle: '피가 싸인 구하기 미묘한 풀밭에\n넣는 두손을 칼이다',
    },
    {
      icon: Icon2,
      title: '두번째 타이틀',
      subTitle: ' 행복스럽고 그들의 설산에서\n소금이라 우리의 꾸며 별과 뿐이다',
    },
    {
      icon: Icon3,
      title: '세번째 타이틀',
      subTitle: '피가 싸인 구하기 미묘한 풀밭에\n넣는 두손을 칼이다',
    },
    {
      icon: Icon4,
      title: '네번째 타이틀',
      subTitle: ' 행복스럽고 그들의 설산에서\n소금이라 우리의 꾸며 별과 뿐이다',
    },
  ]

  return (
    <View>
      <Info>
        <h2 data-aos="fade">DEEP UI</h2>

        <p data-aos="fade" data-aos-delay="150">
          {
            'DEEP UI는 다양한 사용자들의 컨텐츠를 파악하여,\n다양한 템플릿을 제공 및 서비스 제작을 돕고 있습니다.'
          }
        </p>
      </Info>

      <Items>
        {items.map((item, i) => {
          return (
            <Item key={i} data-aos="fade" data-aos-delay="350">
              <item.icon />
              <span>{item.title}</span>
              <p>{item.subTitle}</p>
            </Item>
          )
        })}
      </Items>
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 160px 20px 200px;
  transition: 0.3s ease-in-out;
  row-gap: 60px;

  @media (max-width: 600px) {
    padding: 80px 20px 100px;
    row-gap: 50px;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;

  @media (max-width: 600px) {
    row-gap: 16px;
  }

  h2 {
    font-size: 36px;

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
    white-space: pre-line;
    text-align: center;
    line-height: 1.5;

    @media (max-width: 1080px) {
      font-size: 15px;
    }
  }
`

const Items = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  column-gap: 20px;
  row-gap: 50px;
`

const Item = styled.li`
  width: 100%;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  svg {
    margin-bottom: 10px;
    width: 46px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }

  p {
    font-size: 14px;
    color: #999;
    text-align: center;
    white-space: pre-line;
    line-height: 1.35;
  }
`
