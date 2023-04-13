import PropTypes from "prop-types"
import { CgClose } from "react-icons/cg"

import { navItems } from "../../constants/global"

import NavItem from "../NavItem"

Navbar.propTypes = {
    stickyHeader: PropTypes.bool.isRequired,
}

function Navbar({ stickyHeader }) {

    const handleCloseMenu = () => {
        const mobileNav = document.querySelector(".mobile-nav")
        mobileNav.style.left = "-100%"
        const menuIcon = document.querySelector(".menu-icon")
        menuIcon.style.display = "block"
    }

    return (
        <nav>
            {/* pc nav  */}
            <div className={`pc-nav lg:block hidden py-2 px-7 ${stickyHeader ? "" : "bg-white transition-all duration-700 ease-in-out"} text-black rounded-bl-full`}>
                <ul className="flex py-2 ">
                    {navItems.map((item, index) => <NavItem key={index} item={item} />)}
                </ul>
            </div>

            {/* mobile nav */}
            <div className={`mobile-nav fixed left-[-100%] top-0 transition-[left] duration-700 ease-out  bg-white/90 w-full h-screen flex justify-center items-center`}>
                <ul className="text-lg font-medium flex flex-col justify-center gap-7 text-gray-900">
                    {navItems.map((item, index) => <NavItem key={index} item={item} />)}
                </ul>

                <div
                    onClick={handleCloseMenu}
                    className="text-3xl mx-7 lg:hidden block cursor-pointer text-gray-900 absolute top-6 right-0"
                >
                    <CgClose />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;