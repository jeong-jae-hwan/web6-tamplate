import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import { useRouter } from 'next/router'
import React from 'react'

function Layout({ children }) {
  const styles = {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const router = useRouter()
  const errorPage = router.pathname === '/404'

  return (
    <div style={styles}>
      {!errorPage && <Header />}
      {children}
      {!errorPage && <Footer />}
    </div>
  )
}

export default Layout
