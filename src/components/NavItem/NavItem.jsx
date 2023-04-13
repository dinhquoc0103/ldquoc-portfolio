import PropTypes from "prop-types"

NavItem.propTypes = {
    item: PropTypes.object.isRequired,
}

function NavItem({ item, }) {
    const { title, hash } = item

    const handleCloseMenu = () => {
        const mobileNav = document.querySelector(".mobile-nav")
        mobileNav.style.left = "-100%"
        const menuIcon = document.querySelector(".menu-icon")
        menuIcon.style.display = "block"
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