import { NextSeo } from 'next-seo'
import Head from 'next/head'

function SEO({ title }) {
  return (
    <NextSeo
      title={`${title}\t${title && '-'}\t 템플릿`}
      description="사이트 디스크립션"
      keywords={['키워드1', '키워드2']}
      canonical="https://deepfactory.kr/"
      icon="../public/favicon.ico"
      openGraph={{
        type: 'website',
        url: 'https://deepfactory.kr/',
        site_name: '사이트명',
        title: '사이트 타이틀',
        description: '사이트 디스크립션',
        images: [
          {
            url: 'https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/dc9d43b4-dfcd-41e2-ef16-c698bd337b00/public',
            alt: '이미지 명',
          },
        ],
      }}
    />
  )
}

export default SEO
