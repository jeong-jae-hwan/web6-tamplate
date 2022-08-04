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

  return (
    <div style={styles}>
      <header>헤더</header>

      <main>{children}</main>

      <footer>푸터</footer>
    </div>
  )
}

export default Layout
