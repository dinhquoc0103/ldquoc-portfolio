import PropTypes from "prop-types"

NavItem.propTypes = {
    item: PropTypes.object.isRequired,
}

function NavItem({ item }) {
    const { title, hash } = item

    return (
        <li className="nav-item">
            <a href={hash} >{title}</a>
        </li>
    );
}

export default NavItem