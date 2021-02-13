import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href={"/favicon.ico"} />
      </Head>
      <div>
        <img src="/static/svg/undraw_Nature_fun_re_iney.svg" />
      </div>
    </div>
  )
}
