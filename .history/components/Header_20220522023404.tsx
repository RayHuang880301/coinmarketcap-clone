import React from 'react'
import Image from "next/image"

const styles = {
  header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
  headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
  nav: `flex justify-center items-center gap-[20px]`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`
}

const Header = () => {
  return (
    <div className={styles.header}>
      <Image 
        src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg'
        alt='logo'
        width={220}
        height={220}
      />
      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Cryptocurrency</div>
            <div className={styles.badge} />                
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Exchanges</div>            
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>NFT</div>
            <div className={styles.badge} />                
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Cryptown</div>
            <div className={styles.badge} />                
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Portfolio</div>         
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Watchlist</div>          
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Products</div>
            <div className={styles.badge} />                
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Learn</div>          
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header