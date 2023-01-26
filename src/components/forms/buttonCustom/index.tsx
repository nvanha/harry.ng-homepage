import { forwardRef } from "react";

interface ButtonDefaultProps {
  color?:
    | "green"
    | "orange"
    | "red"
    | "blue"
    | "purple"
    | "pink"
    | "cyan"
    | "teal"
    | "yellow";
  variant?: "primary" | "disabled";
  size?: "l" | "m" | "s";
  disabled?: boolean;
  customClassName?: string | "";
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
}

const ButtonCustom = forwardRef(
  (props: ButtonDefaultProps, ref: React.ForwardedRef<unknown>) => {
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
        ref={ref as any}
        {...rest}
      >
        {children || "Button Custom"}
      </button>
    );
  }
);

export default ButtonCustom;
