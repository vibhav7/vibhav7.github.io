import styles from "./index.module.scss"
import Trail from "../core/Trail"

export default function LandingPage() {
  return (
    <div className="">
      <div className={`${styles["hero"]} w-full`}>
        <div className="text-center">Coming Soon</div>
        <img className="mx-auto opacity-25" src="/static/png/frontend.png" />
      </div>
    </div>
  )
}
