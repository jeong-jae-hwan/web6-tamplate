import React from 'react'
import { useRouter } from 'next/router'

//custom
import ScrollTopTab from 'widgets/ScrollTopTab'

//components
import Footer from '@/components/common/Footer'

//
export default function Layout({ children }) {
  const router = useRouter()
  const errorPage = router.pathname === '/404'

  return (
    <div className="layout">
      <main>{children}</main>
      {!errorPage && <Footer />}
      <ScrollTopTab />
    </div>
  )
}
