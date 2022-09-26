import 'styles/@globals.css'
import { store } from '/@redux/store'
import { Provider } from 'react-redux'
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
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </RecoilRoot>
    </>
  )
}

export default MyApp
