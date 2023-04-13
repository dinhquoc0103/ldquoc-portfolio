import { useEffect, useState } from "react"
import Navbar from "../Navbar"

function Header() {
    const [stickyHeader, setStickyHeader] = useState(false)

    useEffect(() => {
        const handleStickyHeader = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const temp = scrollTop > 50 ? true : false
            setStickyHeader(temp)
        }

        window.addEventListener("scroll", handleStickyHeader)

        return () => window.addEventListener("scroll", handleStickyHeader)
    }, [stickyHeader])

    return (
        <header
            className={`flex justify-between items-center fixed w-full z-[99] ${stickyHeader ? "bg-white/60 text-gray-900 transition duration-500 ease-in" : ''}`}
        >
            <div className="mx-7">
                <h4 className="uppercase text-4xl font-semibold">
                    L
                    <span className="text-cyan-600">D</span>
                    QUOC
                </h4>
            </div>

            <Navbar stickyHeader={stickyHeader} />
        </header>
    )
}

export default Header