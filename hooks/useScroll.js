import { useEffect, useState } from "react"

export default function useScroll() {

  const [isScroll, setIsScroll] = useState(false)

  function handleScroll() {
    if (window.pageYOffset > 0) {
      setIsScroll(true)
    }
    else if (window.pageYOffset == 0) {
      setIsScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  return { isScroll }
}