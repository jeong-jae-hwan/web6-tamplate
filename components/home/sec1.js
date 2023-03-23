import React from 'react'

//style
import styled from '@emotion/styled'

//png
import bannerImg from 'public/images/banner-img.png'
import Image from 'next/image'

//
export default function Sec1() {
  return (
    <View>
      <Image src={bannerImg} alt="배너" />

      <Typo>
        <h1>{`나에게 맞는 UI DESIGN\nDEEP UI TAMPLATE`}</h1>

        <button type="button">문의하기</button>
      </Typo>
    </View>
  )
}

//styled
const View = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;

  @media (max-width: 600px) {
    height: 100vh;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Typo = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;

  @media (max-width: 1080px) {
    row-gap: 30px;
  }

  h1 {
    font-size: 46px;
    color: #fff;
    white-space: pre-line;
    text-align: center;

    @media (max-width: 1080px) {
      font-size: 36px;
    }

    @media (max-width: 600px) {
      font-size: 30px;
    }
  }

  button {
    font-size: 16px;
    padding: 16px 50px;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid #fff;
    border-radius: 100px;
    color: #666;

    &:hover {
      background-color: #fff;
    }

    @media (max-width: 1080px) {
      font-size: 15px;
    }
  }
`
