import React from 'react'
import Navbar from '@components/Navbar/Navbar'

import styles from './layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer className="footer">This is the footer</footer>

      <style jsx>{`
        .footer {
          background: yellow;
        }
      `}</style>
    </div>
  )
}

export default Layout
