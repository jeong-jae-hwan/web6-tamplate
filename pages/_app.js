import 'styles/@globals.css'
import Layout from 'public/Layout'
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // useEffect(() => {
  //   const handleRouteChange = url => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

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

export default MyApp
