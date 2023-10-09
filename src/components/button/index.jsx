import classNames from "classnames";
import { createElement } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
export default function Button({ children, size }) {
  return createElement(
    "button",
    {
      className: classNames(
        "bg-[#1d9bf0] justify-center text-white rounded-full flex items-center hover:bg-[#1a8cd8] transition-colors",
        {
          "px-4 h-9": size === "medium",
          'px-4 text-[17px] h-12 w-full': size === 'large'
        }
      ),
    },
    children
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["medium", "large"]),
};

Button.defaultProps = {
  size: "medium",
};
