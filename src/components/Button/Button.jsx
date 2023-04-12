import PropTypes from "prop-types"

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

function Button({
    children,
    className = '',
    disabled = false,
    onClick = null,
}) {
    return (
        <button
            className={`btn ${className}`}
            disabled={disabled}
            onClick={onClick ? onClick : null}
        >
            {children}
        </button>
    );
}

export default Button;