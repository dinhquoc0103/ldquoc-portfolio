import PropTypes from "prop-types"

import { navItems } from "../../constants/global"

import NavItem from "../NavItem"

Navbar.propTypes = {
    stickyHeader: PropTypes.bool.isRequired
}

function Navbar({ stickyHeader }) {
    return (
        <nav className={`py-2 px-7 ${stickyHeader ? "" : "bg-white transition-all duration-700 ease-in-out"} text-black rounded-bl-full`}>
            <ul className="flex py-2 ">
                {navItems.map((item, index) => <NavItem key={index} item={item} />)}
            </ul>
        </nav>
    );
}

export default Navbar;