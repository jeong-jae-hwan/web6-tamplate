import Layout from 'public/Layout'

//css
import 'styles/@globals.css'

//atoms
import { RecoilRoot } from 'recoil'

//
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  )
}
