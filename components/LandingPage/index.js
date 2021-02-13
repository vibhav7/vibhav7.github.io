import styles from "../../styles/Home.module.css"
import Trail from "../core/Trail"

export default function LandingPage() {
  return (
    <div className="">
      <div className={`${styles.HeroContainerSvg} w-full`}>
        {/* <Trail /> */}
        <img className="mx-auto" src="/static/svg/undraw_Nature_fun_re_iney.svg" />
      </div>
    </div>
  )
}
