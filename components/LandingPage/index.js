import styles from "./index.module.scss"
import Trail from "../core/Trail"

export default function LandingPage() {
  return (
    <div className="">
      <div className={`${styles["hero"]} w-full`}>
        <div className="text-center">Working</div>
        <img className="mx-auto" src="/static/svg/undraw_Nature_fun_re_iney.svg" />
        <div className="min-h-screen"></div>
      </div>
    </div>
  )
}
