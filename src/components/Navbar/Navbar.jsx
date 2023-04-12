import { navItems } from "../../constants/global";

import NavItem from "../NavItem";

function Navbar() {
    return (
        <nav className="py-2 px-7 bg-white text-black rounded-bl-full">
            <ul className="flex py-2 ">
                {navItems.map((item, index) => <NavItem key={index} item={item} />)}
            </ul>
        </nav>
    );
}

export default Navbar;