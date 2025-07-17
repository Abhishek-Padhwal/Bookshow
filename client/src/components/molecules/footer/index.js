import React from 'react'

import styles from './footer.module.scss'
function Footer() {
  return (
    <footer className={styles.footer}>
        {/* Top Row */}
        <div className={styles.top}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        {/* Bottom Row */}
        <div className={styles.subFooter}>
            Copyright 2025 © GreatStack. All Right Reserved
        </div>
    </footer>
  )
}

export default Footer