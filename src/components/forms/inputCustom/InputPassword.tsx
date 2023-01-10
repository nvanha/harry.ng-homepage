import React from "react";
import { Input } from "@material-tailwind/react";

const InputPassword = ({
  label,
  isError,
  msgError,
  isValid,
  isInvalid,
  isRequired,
  customClassName = "",
  ...rest
}) => {
  return (
    <div className="input-custom input-custom-text mb-4">
      <Input
        className={customClassName}
        label={isRequired ? `${label} (*)` : label}
        success={isValid}
        error={typeof isInvalid === "string" ? true : false}
        type="password"
        {...rest}
      />
      {isError && <div className="error-msg">{msgError}</div>}
    </div>
  );
};

export default InputPassword;
