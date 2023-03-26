import React from 'react'

//css
import 'styles/@globals.css'

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
