import PropTypes from "prop-types"

NavItem.propTypes = {
    item: PropTypes.object.isRequired,
}

function NavItem({ item, isMobileNav }) {
    const { title, hash } = item

    const handleCloseMenu = () => {
        if (isMobileNav) {
            const mobileNav = document.querySelector(".mobile-nav")
            mobileNav.style.left = "-100%"
            const menuIcon = document.querySelector(".menu-icon")
            menuIcon.style.display = "block"
        }
    }

    return (
        <li
            onClick={handleCloseMenu}
            className="nav-item"
        >
            <a href={hash} >{title}</a>
        </li>
    );
}

export default NavItem