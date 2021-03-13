import { useState } from "react"
import styles from "./index.module.scss"

export default function LandingPage() {

  return (
    <div className="">
      <div className={`${styles["hero"]} w-full`}>
        <div className="min-h-screen text-center">Coming Soon</div>
        {/* <img className="mx-auto opacity-25" src="/static/png/frontend.png" /> */}
      </div>
    </div>
  )
}
