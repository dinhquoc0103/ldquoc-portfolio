import { useCallback, useEffect, useState } from "react"
import { FiMenu } from "react-icons/fi"

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

    const handleOpenMenu = useCallback(() => {
        const mobileNav = document.querySelector(".mobile-nav")
        mobileNav.style.left = "0"
        const menuIcon = document.querySelector(".menu-icon")
        menuIcon.style.display = "none"
    })


    return (
        <header
            className={`flex justify-between lg:py-0 py-4 transition-[padding] duration-700 ease-in-out items-center fixed w-full z-[99] ${stickyHeader ? "bg-white/60 text-gray-900 transition duration-500 ease-in" : ''}`}
        >
            <div className="mx-7">
                <h4 className="uppercase text-4xl font-semibold">
                    L
                    <span className="text-cyan-600">D</span>
                    QUOC
                </h4>
            </div>

            <Navbar stickyHeader={stickyHeader} />

            <div
                onClick={handleOpenMenu}
                className={`menu-icon text-3xl mx-7 lg:hidden block cursor-pointer`}
            >
                <FiMenu />
            </div>
        </header>
    )
}

export default Header