import React from 'react'
//style
import styled from '@emotion/styled'

//
export default function Sec4({ handleFocus }) {
  return (
    <View>
      <strong data-aos="fade">{'지금 당장 DEEP에게\n문의하세요.'}</strong>
      <p data-aos="fade">
        {'DEEP UI는 다양한 플렛폼의 \n템플릿을 취급하고 있습니다.'}
      </p>

      <button type="button" onClick={handleFocus} data-aos="fade">
        문의하기
      </button>
    </View>
  )
}

//styled
const View = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
  padding: 70px 0;
  transition: 0.3s ease-in-out;
  background-image: linear-gradient(223deg, #f7f7f7 100%, #f0f0f0 30%);

  @media (max-width: 600px) {
    background-color: #fff;
    background-image: none;
    padding: 100px 0;
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
    font-size: 15px;
    color: #797979;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 14px;
      white-space: pre-line;
    }
  }

  button {
    font-size: 16px;
    background-color: #333;
    padding: 16px 54px;
    margin-top: 14px;
    border-radius: 100px;
    color: #fff;

    &:hover {
      background-color: #222;
    }

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`
