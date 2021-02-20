import Head from 'next/head'
import Wrapper from '../components/core/Wrapper'
import LandingPage from '../components/LandingPage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Wrapper >
      <div className="text-center">
        <LandingPage />
      </div>
    </Wrapper>
  )
}
