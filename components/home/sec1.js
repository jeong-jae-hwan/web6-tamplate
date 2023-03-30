import React from 'react'

//style
import styled from '@emotion/styled'
import Image from 'next/image'

//png
import banner1 from 'public/images/sec1/banner1.png'
import banner2 from 'public/images/sec1/banner2.png'
import banner3 from 'public/images/sec1/banner3.png'

//module
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
SwiperCore.use([Pagination, Autoplay])

//
export default function Sec1() {
  const banners = [
    {
      img: banner1,
      edge: 'BRAND HISTORY',
      title: '자유와 모험을 즐기는\n나의 LIFE 스토리\nDEEP 카드',
    },
    {
      img: banner2,
      edge: 'BRAND HISTORY',
      title: 'Illustration\nCRYSTALEP.1\nPRE-LAUNCHEVENT',
    },
    {
      img: banner3,
      edge: 'BRAND HISTORY',
      title: 'Illustration\nCRYSTALEP.1\nPRE-LAUNCHEVENT',
    },
  ]

  return (
    <View>
      <Swiper
        modules={[Pagination]}
        autoplay={{ delay: 2500 }}
        pagination={true}
        className="swiper"
      >
        {banners.map((item, i) => {
          return (
            <SwiperSlide key={i} className="swiper_item">
              <Image src={item.img} alt="배너" />

              <Typo>
                <span data-aos="fade" data-aos-delay="200">
                  {item.edge}
                </span>
                <h1 data-aos="fade">{item.title}</h1>
              </Typo>
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
  height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;

  @media (max-width: 600px) {
    height: 500px;
  }

  .swiper {
    width: 100%;
    height: 100%;

    .swiper_item {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 600px) {
        align-items: flex-end;
        padding-bottom: 70px;
      }
    }
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
  width: 100%;
  max-width: 1250px;
  padding: 0 25px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;

  @media (max-width: 1080px) {
    row-gap: 16px;
  }

  span {
    color: #eee;
    border-radius: 100px;
    font-size: 20px;

    @media (max-width: 1080px) {
      font-size: 16px;
    }
  }

  h1 {
    font-size: 46px;
    color: #fff;
    white-space: pre-line;

    @media (max-width: 1080px) {
      font-size: 36px;
    }

    @media (max-width: 600px) {
      font-size: 30px;
    }
  }
`
