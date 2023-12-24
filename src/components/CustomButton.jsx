import PropTypes from 'prop-types'

const CustomButton = ({children, secondary, icon, onClick}) => {
  return (
    <button
        onClick={onClick}
        className={`${secondary ? "bg-secondary" : "bg-accent"} ${secondary ? "hover:bg-hoverSecondary" : "hover:bg-hoverPrimary"}
                    transition-all ease-linear duration-300 py-2.5 px-8 rounded-full text-white text-base sm:text-lg text-bold relative w-full sm:w-fit`}
    >
        {icon ? (
            <div className="flex items-center justify-center gap-2.5">
                <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">{children}</p>
                <img src={icon} alt="" />
            </div>
        ) : (
            <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">{children}</p>
        )
        }
    </button>
  )
}

export default CustomButton

CustomButton.propTypes = {
    children: PropTypes.node,
    secondary: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func
  }