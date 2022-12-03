import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

//custom
import ScrollTopTab from 'custom/tabs/ScrollTopTab'

//components
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'

//atoms
import { useRecoilState } from 'recoil'
import { scrollPosition } from 'atoms/layout-atom'

//
function Layout({ children }) {
  const router = useRouter()
  const errorPage = router.pathname === '/404'

  // 모달시트 스크롤 위치 파악용
  const [isPosition, setIsPosition] = useRecoilState(scrollPosition)

  function onScroll() {
    setIsPosition(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

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
