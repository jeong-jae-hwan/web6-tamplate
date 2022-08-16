import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import { useRouter } from 'next/router'
import React from 'react'

function Layout({ children }) {
  const router = useRouter()
  const errorPage = router.pathname === '/404'

  return (
    <div className="layout">
      {!errorPage && <Header />}
      <main>
        <section>{children}</section>
      </main>
      {!errorPage && <Footer />}
    </div>
  )
}

export default Layout
