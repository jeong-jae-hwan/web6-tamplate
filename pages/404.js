import { useRouter } from 'next/router'
import React from 'react'

//svg
import Logo from 'public/images/logo.svg'

//styled
import { css } from '@emotion/react'
import { Box, View } from 'styles/layout-styled'
import { Text, Title } from 'styles/text-styled'
import { Tab } from 'styles/view-styled'

export default function Error() {
  const router = useRouter()

  return (
    <View css={styled.box}>
      <Box css={styled.wrap}>
        <Logo css={styled.logo} />
      </Box>

      <Title css={styled.title}>페이지를 찾을 수 없습니다</Title>
      <Text css={styled.text}>아래 버튼을 통해 이전페이지로 이동하세요.</Text>
      <Tab css={styled.tab} onClick={() => router.back()}>
        이동
      </Tab>
    </View>
  )
}

//styled
const styled = {
  box: css`
    padding: 0 30px;
    height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  `,

  wrap: css`
    width: 58px;
    height: 58px;
    justify-content: center;
    padding: 10px;
    background-color: #f5f5f5;
    border: 1px solid #e2e2e2;
    border-radius: 100px;
    margin-bottom: 24px;

    @media (max-width: 768px) {
      width: 54px;
      height: 54px;
    }
  `,

  logo: css`
    width: 28px;
    fill: #fff;

    @media (max-width: 768px) {
      width: 26px;
    }
  `,

  title: css`
    font-size: 2.25rem;
    margin-bottom: 0.35em;

    @media (max-width: 768px) {
      font-size: 1.75rem;
      text-align: center;
      white-space: nowrap;
    }
  `,

  text: css`
    font-size: 0.938rem;
    color: #797979;
  `,

  tab: css`
    padding: 14px 28px;
    border-radius: 100px;
    background-color: #333;
    font-size: 1rem;
    color: #fff;
    margin-top: 36px;

    &:hover {
      background-color: #404040;
    }
  `,
}
