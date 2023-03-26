import React from 'react'
import Image from 'next/image'

//style
import styled from '@emotion/styled'

//png
import bannerImg from 'public/images/sec5-img.png'

//
export default function Sec5() {
  return (
    <View>
      <Image src={bannerImg} alt="banner" />
      <strong>{'우리는 나아갑니다\n그리고 만들어갑니다.'}</strong>
      <p>
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
      </p>
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 120px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  transition: 0.3s ease-in-out;

  @media (max-width: 600px) {
    padding: 0 0 80px;
    row-gap: 16px;
  }

  img {
    width: 100%;
    max-height: 460px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;

    @media (max-width: 1080px) {
      max-height: 360px;
    }

    @media (max-width: 600px) {
      max-height: 260px;
      border-radius: 0;
      margin-bottom: 10px;
    }
  }

  strong {
    font-size: 32px;
    text-align: center;
    line-height: 1.4;

    @media (max-width: 1080px) {
      font-size: 26px;
    }

    @media (max-width: 600px) {
      font-size: 24px;
      white-space: pre-line;
    }
  }

  p {
    width: 100%;
    max-width: 640px;
    font-size: 15px;
    color: #797979;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 14px;
      white-space: pre-line;
      padding: 0 20px;
    }
  }
`
