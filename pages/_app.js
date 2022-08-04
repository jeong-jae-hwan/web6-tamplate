import '../public/src/globals.css'
import { store } from '/@redux/store'
import { Provider } from 'react-redux'
import Layout from 'public/src/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp
