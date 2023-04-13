import { FaArrowUp } from "react-icons/fa"

import Button from "../Button"
import { useState, useEffect } from "react"

function ScrollToTop() {
    const [onScrollToTop, setOnScrollToTop] = useState(false)

    useEffect(() => {
        const scrollToTop = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const temp = (scrollTop > 100) ? true : false
            setOnScrollToTop(temp)
        }

        window.addEventListener("scroll", scrollToTop)

        return () => window.removeEventListener("scroll", scrollToTop)
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className={`fixed bottom-14 right-20 ${onScrollToTop ? "visible" : "invisible"}`}>
            <Button onClick={handleScrollToTop}>
                <FaArrowUp />
            </Button>
        </div>
    )
}

export default ScrollToTop