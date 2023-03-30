import React from 'react'
import Image from 'next/image'

//style
import styled from '@emotion/styled'

//png
import img1 from 'public/images/sec1/banner1.png'
import img2 from 'public/images/sec1/banner2.png'

//module
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
SwiperCore.use([Pagination, Autoplay])

//
export default function Sec1({ contectRef }) {
  const banners = [img1, img2]

  return (
    <View ref={contectRef}>
      <Reserve>
        <Typo>
          <h1 data-aos="fade">{`BRAND 관람\n예약 바로가기`}</h1>

          <p data-aos="fade" data-aos-delay="200">
            화요일~일요일 10:00~18:00
            <br />
            서울시 노고산동 마포구 00호실 000관
          </p>
        </Typo>

        <button type="butoon" data-aos="fade" data-aos-delay="300">
          예약하기
        </button>
      </Reserve>

      <Swiper
        modules={[Pagination]}
        autoplay={{ delay: 2500 }}
        pagination={true}
        className="swiper"
      >
        {banners.map((item, i) => {
          return (
            <SwiperSlide key={i} className="swiper_item">
              <Box data-aos="fade">
                <Image src={item} alt="sec1" />
              </Box>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </View>
  )
}

//styled
const View = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease-in-out;

  .swiper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .swiper_item {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

const Reserve = styled.div`
  width: 100%;
  max-width: 1350px;
  padding: 80px 25px 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    padding: 60px 25px 40px;
  }

  @media (max-width: 600px) {
    padding: 30px 25px 30px;
  }

  button {
    font-size: 16px;
    padding: 16px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    border-radius: 100px;
    color: #fff;
    transition: 0.3s ease-in-out;
    white-space: nowrap;

    &:hover {
      background-color: #444;
    }

    @media (max-width: 1080px) {
      font-size: 15px;
      padding: 14px 24px;
    }

    @media (max-width: 600px) {
      margin-top: 8px;
      font-size: 14px;
      padding: 12px 16px;
    }
  }
`

const Typo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    row-gap: 20px;
  }

  @media (max-width: 600px) {
    row-gap: 14px;
  }

  h1 {
    font-size: 40px;
    color: #333;

    @media (max-width: 1080px) {
      font-size: 30px;
    }

    @media (max-width: 600px) {
      font-size: 28px;
      white-space: pre-line;
    }
  }

  p {
    font-size: 15px;
    color: #797979;
    line-height: 1.5;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`

const Box = styled.div`
  width: 100%;
  max-width: 1350px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    padding: 0;
  }

  img {
    width: 100%;
    max-height: 540px;
    aspect-ratio: 16 / 10;
    border-radius: 10px;
    object-fit: cover;

    @media (max-width: 1080px) {
      border-radius: 0;
      max-height: 400px;
    }

    @media (max-width: 600px) {
      max-height: 320px;
    }
  }

  h6 {
    font-size: 22px;
    margin: 30px 0 12px;

    @media (max-width: 1080px) {
      padding: 0 25px;
    }

    @media (max-width: 600px) {
      font-size: 18px;
      margin: 20px 0 10px;
    }
  }

  p {
    font-size: 14px;
    color: #999;

    @media (max-width: 1080px) {
      padding: 0 25px;
    }

    @media (max-width: 600px) {
      font-size: 13px;
    }
  }
`
