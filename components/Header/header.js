import styles from './index.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.elementsDiv}>
        <div>
          <Link href="/" passHref>
            <a className={styles.mainLink}>
            ~/egebircan-dev
            </a>
          </Link>
        </div>
        <div className>
          <nav className={styles.nav}>
              <Link href="/">
                <a className={styles.navLink}>
                  About
                </a>        
              </Link>
              <Link href="/projects">
                <a className={styles.navLink}>
                  Projects
                </a>        
              </Link>
            </nav>
        </div>
      </div>
    </div>
  )
}