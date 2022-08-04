import { add } from '@redux/slice/counterSlice'
import { useRouter } from 'next/router'
import SEO from 'public/src/SEO'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Index() {
  const router = useRouter()
  const countReducer = useSelector(({ count }) => count.value)
  const dispatch = useDispatch()

  const count = () => {
    dispatch(add())
  }

  const styles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  return (
    <>
      <SEO />
      <section>
        <div style={styles}>
          <div onClick={() => router.push('/inquiry')}>이동</div>
          <button onClick={count}>++</button>
          <h1>결과: {countReducer}</h1>
        </div>
      </section>
    </>
  )
}

export default Index
