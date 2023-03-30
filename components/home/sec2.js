import React from 'react'

//styled
import styled from '@emotion/styled'

//img
import img1 from 'public/images/sec2/img1.png'
import img2 from 'public/images/sec2/img2.png'
import img3 from 'public/images/sec2/img3.png'
import Image from 'next/image'

//
export default function Sec2({ contectRef, handleFocus }) {
  return (
    <View ref={contectRef}>
      <Box>
        <Info>
          <strong data-aos="fade">
            {'일상이 디자인이 되는\n프리미엄 신용카드 서비스'}
          </strong>
          <p data-aos="fade">
            지혜는 너의 천자만홍이 이것이다. 싶이 얼마나 스며들어 것이다. 싸인
            속잎나고, 낙원을 타오르고 이것을 피고, 힘차게 투명하되 쓸쓸하랴?
            뛰노는 두기 트고, 피어나기 이것이다. 그들에게 피가 같지 가는 길지
            뜨거운지라, 아니다. 꽃 있는 인간의 크고 그들의 위하여, 방지하는
            무엇을 얼마나 것이다. 청춘에서만 우리의 가진 역사를 청춘을 미인을
            칼이다. 몸이 바로 현저하게 주며, 바이며, 같이, 심장의 지혜는 없으면,
            부패뿐이다. 인도하겠다는 커다란 어디 청춘 예가 군영과 싹이 보내는
            것이다. 그들은 인간은 보이는 목숨 이 바이며, 불어 약동하다.
          </p>

          <button
            type="button"
            onClick={handleFocus}
            data-aos="fade"
            data-aos-delay="100"
          >
            지금 신청하기
          </button>
        </Info>

        <Content>
          <Image
            src={img1}
            alt="sec2"
            data-aos="fade-left"
            data-aos-delay="100"
          />
          <button
            type="button"
            onClick={handleFocus}
            data-aos="fade"
            data-aos-delay="100"
          >
            지금 신청하기
          </button>
        </Content>
      </Box>

      <Box>
        <Content>
          <Image
            src={img2}
            alt="sec2"
            data-aos="fade-right"
            data-aos-delay="100"
          />
          <button
            type="button"
            onClick={handleFocus}
            data-aos="fade"
            data-aos-delay="100"
          >
            지금 신청하기
          </button>
        </Content>

        <Info>
          <strong data-aos="fade">{'자유롭게 충전하다\nTESLA 충전카드'}</strong>
          <p data-aos="fade">
            지혜는 너의 천자만홍이 이것이다. 싶이 얼마나 스며들어 것이다. 싸인
            속잎나고, 낙원을 타오르고 이것을 피고, 힘차게 투명하되 쓸쓸하랴?
            뛰노는 두기 트고, 피어나기 이것이다. 그들에게 피가 같지 가는 길지
            뜨거운지라, 아니다. 꽃 있는 인간의 크고 그들의 위하여, 방지하는
            무엇을 얼마나 것이다. 청춘에서만 우리의 가진 역사를 청춘을 미인을
            칼이다. 몸이 바로 현저하게 주며, 바이며, 같이, 심장의 지혜는 없으면,
            부패뿐이다. 인도하겠다는 커다란 어디 청춘 예가 군영과 싹이 보내는
            것이다. 그들은 인간은 보이는 목숨 이 바이며, 불어 약동하다.
          </p>

          <button
            type="button"
            onClick={handleFocus}
            data-aos="fade"
            data-aos-delay="100"
          >
            지금 신청하기
          </button>
        </Info>
      </Box>

      <Box>
        <Info>
          <strong data-aos="fade">{'고급진 일상의 하루\n프리미엄 블랙'}</strong>
          <p data-aos="fade">
            지혜는 너의 천자만홍이 이것이다. 싶이 얼마나 스며들어 것이다. 싸인
            속잎나고, 낙원을 타오르고 이것을 피고, 힘차게 투명하되 쓸쓸하랴?
            뛰노는 두기 트고, 피어나기 이것이다. 그들에게 피가 같지 가는 길지
            뜨거운지라, 아니다. 꽃 있는 인간의 크고 그들의 위하여, 방지하는
            무엇을 얼마나 것이다. 청춘에서만 우리의 가진 역사를 청춘을 미인을
            칼이다. 몸이 바로 현저하게 주며, 바이며, 같이, 심장의 지혜는 없으면,
            부패뿐이다. 인도하겠다는 커다란 어디 청춘 예가 군영과 싹이 보내는
            것이다. 그들은 인간은 보이는 목숨 이 바이며, 불어 약동하다.
          </p>

          <button
            type="button"
            onClick={handleFocus}
            data-aos="fade"
            data-aos-delay="100"
          >
            지금 신청하기
          </button>
        </Info>

        <Content>
          <Image
            src={img3}
            alt="sec2"
            data-aos="fade-left"
            data-aos-delay="100"
          />
          <button
            type="button"
            onClick={handleFocus}
            data-aos="fade"
            data-aos-delay="100"
          >
            지금 신청하기
          </button>
        </Content>
      </Box>
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  max-width: 1250px;
  padding: 140px 25px 160px;
  display: flex;
  flex-direction: column;
  row-gap: 160px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    padding: 100px 25px 120px;
    row-gap: 100px;
  }

  @media (max-width: 600px) {
    padding: 60px 25px 80px;
    row-gap: 70px;
  }
`

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  row-gap: 30px;
  column-gap: 50px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`

const Info = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 30px;
  margin-top: 20px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    max-width: 100%;
    order: 1;
  }

  @media (max-width: 600px) {
    row-gap: 20px;
  }

  strong {
    font-size: 36px;
    white-space: pre-line;
    line-height: 1.4;

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
    line-height: 1.4;

    @media (max-width: 1080px) {
      font-size: 15px;
    }

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  button {
    margin-top: 10px;
    padding: 16px 32px;
    border: 1px solid #aaa;
    font-size: 15px;

    &:hover {
      background-color: #f8f8f8;
    }

    @media (max-width: 1080px) {
      display: none;
    }
  }
`

const Content = styled.div`
  width: 100%;
  max-width: 460px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    max-width: 100%;
    order: 2;
    margin-top: 10px;
  }

  img {
    width: 100%;
    height: 540px;
    border-radius: 12px;
    object-fit: cover;

    @media (max-width: 1080px) {
      height: 440px;
    }

    @media (max-width: 600px) {
      height: 300px;
    }
  }

  button {
    display: none;

    @media (max-width: 1080px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      padding: 15px 32px;
      border: 1px solid #aaa;
      border-radius: 12px;

      &:hover {
        background-color: #f8f8f8;
      }
    }

    @media (max-width: 600px) {
      font-size: 15px;
    }
  }
`
