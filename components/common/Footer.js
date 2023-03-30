import React from 'react'

//styles
import styled from '@emotion/styled'

//svg

//
export default function Footer() {
  return (
    <FooterBar>
      <Foot>
        <FootName>Brand company</FootName>
        <Info>
          {`대표 : 정재환 | 사업자등록번호 : 111-12-34567 \n  연락처 : 02-123-4567 | 이메일 : text@testComp.com \n  주소 : 서울시 강남구 테헤란로 00호스빌딩 11 xx빌딩 605호`}
        </Info>

        <Copyright>
          Copyright ⓒ Deep Factory Design. All Rights Reserved
        </Copyright>
      </Foot>
    </FooterBar>
  )
}

//styled
const FooterBar = styled.footer`
  width: 100%;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Foot = styled.div`
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 16px;
  padding: 60px 25px;

  @media (max-width: 1080px) {
    padding: 50px 25px;
  }
`

const FootName = styled.span`
  font-size: 0.875rem;
  color: #aaa;
`

const Info = styled.p`
  font-size: 0.75rem;
  color: #797979;
  white-space: pre-line;
  line-height: 1.5;
`

const Copyright = styled.span`
  font-size: 0.6875rem;
  color: #848a94;
`
