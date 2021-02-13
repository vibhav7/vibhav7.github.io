import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href={process.env.NEXT_PUBLIC_BASE_PATH + "/favicon.ico"} />
      </Head>
      Coming Soon....
    </div>
  )
}
