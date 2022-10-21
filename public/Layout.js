import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import { useRouter } from 'next/router'
import React from 'react'
import ScrollTopTab from 'custom/tabs/ScrollTopTab'

function Layout({ children }) {
  const router = useRouter()
  const errorPage = router.pathname === '/404'

  return (
    <div className="layout">
      {!errorPage && <Header />}
      <main>{children}</main>
      {!errorPage && <Footer />}
      <ScrollTopTab />
    </div>
  )
}

export default Layout
