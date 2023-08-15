import Link from "next/link"
import styles from './home.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
    <h1>Welcome to My Next.js Blog</h1>
      <Link href="/blog" className={styles.blogVisit}>
        Visit the Blog
      </Link>
      </div>
    </>
  )
}
