import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
         <Link href="/products">Products</Link>
        <h2>Home Page</h2>
    </div>
  )
}
