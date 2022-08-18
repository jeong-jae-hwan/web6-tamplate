import 'styles/@globals.css'
import { store } from '/@redux/app/store'
import { Provider } from 'react-redux'
import Layout from 'public/Layout'

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
