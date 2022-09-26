import { useRouter } from 'next/router'
import React from 'react'
import styles from 'styles/404.module.css'

function Error() {
  const router = useRouter()

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2>404</h2>
        <h1>잘못된 접근의 페이지입니다.</h1>
        <p>아래 버튼을 통해 이전페이지로 이동하세요.</p>
        <button onClick={() => router.back()}>뒤로가기</button>
      </div>
    </section>
  )
}

export default Error
