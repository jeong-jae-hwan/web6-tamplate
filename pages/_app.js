import React from 'react'

//css
import 'styles/@globals.css'
import 'styles/@swiper.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

//atoms
import { RecoilRoot } from 'recoil'

//components
import Layout from 'public/Layout'

//
export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}
