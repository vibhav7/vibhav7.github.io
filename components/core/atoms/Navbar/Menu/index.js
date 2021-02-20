import Link from "next/link"
import styles from "./index.module.scss"
import cn from "classnames"

export default function Menu({ label, link, active }) {
  return (
    <Link href={link}>
      <button className="border-b border-transparent hover:border-red-800">
        <button className={`
      font-lato bg-clip-text text-transparent
      bg-gradient-to-r from-red-600 to-blue-600
      hover:from-gray-900 hover:to-gray-300`
        }>
          {label}
        </button>
      </button>
    </Link>
  )
}
