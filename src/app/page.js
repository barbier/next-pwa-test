import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Restaurantes</h1>
      <Link href="/restaurant/a">Restaurante A</Link>
      <Link href="/restaurant/b">Restaurante B</Link>
    </main>
  )
}
