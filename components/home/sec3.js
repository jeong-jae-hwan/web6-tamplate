import React from 'react'

//styled
import styled from '@emotion/styled'

//svg
import Img1 from 'public/icons/sec3/img1.svg'
import Img2 from 'public/icons/sec3/img2.svg'
import Img3 from 'public/icons/sec3/img3.svg'

//
export default function Sec3({ contectRef }) {
  return (
    <View ref={contectRef}>
      <Content>
        <Info>
          <strong data-aos="fade">
            {'다양한 브랜드의\n콘텐츠를 확인해보세요'}
          </strong>
          <p data-aos="fade" data-aos-delay="200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Info>

        <Img1 data-aos="fade-up" data-aos-delay="500" />
      </Content>

      <Content>
        <Img2 data-aos="fade-up" data-aos-delay="500" />
        <Info>
          <strong data-aos="fade">
            {'보안성이 뛰어난\n빠른 속도의 블록생성'}
          </strong>
          <p data-aos="fade" data-aos-delay="200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Info>
      </Content>

      <Content>
        <Info>
          <strong data-aos="fade">{'안전한 시세 변동\n꼼꼼한 블록처리'}</strong>
          <p data-aos="fade" data-aos-delay="200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Info>

        <Img3 data-aos="fade-up" data-aos-delay="500" />
      </Content>
    </View>
  )
}

const View = styled.div`
  width: 100%;
  padding: 200px 25px;
  display: flex;
  flex-direction: column;
  row-gap: 200px;
  align-items: center;
  background-color: #222223;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    padding: 100px 25px;
  }

  @media (max-width: 600px) {
    row-gap: 80px;
    padding: 80px 25px;
  }
`

const Content = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
  row-gap: 40px;
  column-gap: 50px;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }

  svg {
    width: 100%;
    max-width: 540px;

    @media (max-width: 1080px) {
      max-width: 440px;
    }
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-top: 40px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    margin: 0;
    order: 2;
  }

  @media (max-width: 600px) {
    row-gap: 20px;
  }

  strong {
    font-size: 44px;
    font-weight: 500;
    color: #e0e0e0;
    white-space: pre-line;

    @media (max-width: 1080px) {
      text-align: center;
      font-size: 36px;
    }

    @media (max-width: 600px) {
      text-align: start;
      font-size: 26px;
    }
  }

  p {
    max-width: 500px;
    font-size: 15px;
    line-height: 1.5;
    color: #aaa;

    @media (max-width: 1080px) {
      text-align: center;
    }

    @media (max-width: 600px) {
      text-align: start;
      font-size: 14px;
    }
  }
`
