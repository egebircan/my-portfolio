import styles from './index.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div style={{height: "100px"}}>
      <div className={styles.title}>
        <Link href="/">HEADER</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/projects">Projects</Link> |
        <Link href="/">About Me</Link> |
      </nav>
    </div>
  )
}