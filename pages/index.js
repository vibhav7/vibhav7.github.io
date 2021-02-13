import Head from 'next/head'
import Wrapper from '../components/core/Wrapper'
import LandingPage from '../components/LandingPage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // <div className={styles.container}>
    <Wrapper >
      <div className="text-center">
        <LandingPage />
      </div>
    </Wrapper>
    // </div>
  )
}
