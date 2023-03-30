import React, { useState } from 'react'

//svg
import ToggleIcon from 'public/icons/toggle-icon.svg'

//styled
import styled from '@emotion/styled'

//utill
import moment from 'utils/moment'

//
export default function Sec4({ contectRef }) {
  const [isDrop, setIsDrap] = useState(false)

  const toggle = index => {
    if (isDrop === index) {
      return setIsDrap(null)
    }

    setIsDrap(index)
  }

  const contents = [
    {
      q: 'Apple Pay 서비스 도입 : 결제가능',
      a: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed doeiusmod tempor incididunt utlabore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse',
    },
    {
      q: '안전한 전시 마스크 권고 착용',
      a: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed doeiusmod tempor incididunt utlabore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse',
    },
    {
      q: '마일리지 몰 기획전 SKYPASS Deal 『마일리지로 즐기는 봄봄봄』',
      a: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed doeiusmod tempor incididunt utlabore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse',
    },
    {
      q: '2023.04.01 부터 105관 보수공사 시작',
      a: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed doeiusmod tempor incididunt utlabore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse',
    },
    {
      q: '이벤트 당신을 만날때까지 기다립니다.',
      a: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed doeiusmod tempor incididunt utlabore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse',
    },
  ]

  return (
    <View ref={contectRef}>
      <Title data-aos="fade">지금 알아보기</Title>

      <Contents data-aos="fade" data-aos-delay="200">
        {contents.map((item, i) => {
          return (
            <Content
              key={i}
              isActive={isDrop === i}
              onClick={() => {
                toggle(i)
              }}
            >
              <TitleBox isActive={isDrop === i}>
                <Info isActive={isDrop === i}>
                  <p>{item.q}</p>
                  <span>{moment(new Date())}</span>
                </Info>
                <ToggleIcon />
              </TitleBox>

              <Ques isActive={isDrop === i}>{item.a}</Ques>
            </Content>
          )
        })}
      </Contents>
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  padding: 180px 25px 40px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    padding: 60px 0 20px;
  }

  @media (max-width: 600px) {
    padding: 60px 0 20px;
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

const Contents = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 30px;

  @media (max-width: 1080px) {
    margin-top: 16px;
  }
`

const Content = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ isActive }) => (isActive ? '16px' : '0')};
  padding: 18px 0;
  border-bottom: 1px solid #e2e2e2;

  @media (max-width: 1080px) {
    padding: 18px 25px;
  }

  @media (max-width: 600px) {
    padding: 16px 25px;
  }

  &:hover {
    background-color: #fafafa;
    cursor: pointer;
  }
`

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  transition: 0.3s ease-in-out;

  @media (max-width: 600px) {
    align-items: flex-start;
  }

  svg {
    width: 10px;
    max-width: 10px;
    min-width: 10px;
    rotate: ${({ isActive }) => (isActive ? '180deg' : '0deg')};

    @media (max-width: 600px) {
      margin-top: 6px;
    }
  }
`

const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    row-gap: 6px;
  }

  p {
    font-size: 16px;
    display: block;

    width: 100%;
    font-size: 16px;
    font-weight: ${({ isActive }) => (isActive ? '500' : '400')};

    @media (max-width: 600px) {
      font-size: 15px;
    }

    @media (max-width: 460px) {
      max-width: 300px;
    }
  }

  span {
    font-size: 13px;
    color: #999;
  }
`

const Ques = styled.p`
  font-size: 15px;
  color: #666;
  height: auto;
  max-height: ${({ isActive }) => (isActive ? '999px' : '0px')};
  overflow: hidden;
`
