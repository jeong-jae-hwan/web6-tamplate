import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from './@header.module.css'

function Header() {
  const router = useRouter()

  const [navActive, setNavActive] = useState(false)
  const scrollActive = () => {
    if (window.scrollY >= 50) {
      setNavActive(true)
    } else {
      setNavActive(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollActive)
  }, [])

  return (
    <div className={styles.layout}>
      <header
        className={
          navActive
            ? `${styles.wrapper} ${styles.wrapper_active}`
            : styles.wrapper
        }
      >
        <div className={styles.container}>
          <p className={styles.logo}>Logo</p>

          <button
            onClick={() => {
              router.push('/login')
            }}
          >
            로그인
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header
