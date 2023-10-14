import classNames from "classnames";
import { createElement } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
export default function Button({as, children, size, variant, ...props}) {
  return createElement(
    as,
    {
      type:'button',
      className: classNames(
        " justify-center  rounded-full flex items-center transition-colors ",
        {
          "px-4 h-8 text-sm": size === "small",
          "px-4 h-9": size === "medium",
          'px-4 text-[17px] h-12 w-full': size === 'large',
          "bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white": variant === "primary",
          "bg-white hover:bg-[#d7dbdc] text-black": variant === "white",
          "border border-[#b4b4b4]": variant === "white-follow",
          'border border-[#67070f] text-[#f4212e] hover:bg-[#f4212e1a] ': variant === 'white-out',


        }
      ),
      ...props
    },
    children
  );
}

Button.propTypes = {
  as:PropTypes.any,
  size: PropTypes.oneOf(["small","medium", "large"]),
  variant: PropTypes.oneOf(["primary", "white","white-follow", "white-out"]),
  props: PropTypes.object
};

Button.defaultProps = {
  as:'button',
  size: "medium",
  variant: "primary",
};
