import { forwardRef } from "react";

/**
 * color: green, orange, red, blue, purple, pink, cyan, teal, yellow
 * variant: primary, disabled
 * size: l, m, s
 * customClassName: ''
 */

const ButtonCustom = forwardRef(
  (
    props: {
      color?: string;
      variant?: string;
      size?: string;
      disabled?: boolean;
      customClassName?: string;
      children?: any;
    },
    ref: any
  ) => {
    const {
      color = "teal",
      variant = "primary",
      size = "m",
      disabled = false,
      customClassName = "",
      children,
      ...rest
    } = props;

    const COLOR = `btn-custom__color--${color}`;

    const TYPE = `btn-custom__variant--${variant}`;

    const SIZE = `btn-custom__size--${size}`;

    const DISABLED = variant === "disabled" ? true : false;

    return (
      <button
        className={`btn-custom ${COLOR} ${TYPE} ${SIZE} ${customClassName}`}
        disabled={DISABLED}
        ref={ref}
        {...rest}
      >
        {children || "Button Custom"}
      </button>
    );
  }
);

export default ButtonCustom;
