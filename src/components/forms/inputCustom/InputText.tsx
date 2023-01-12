import React from "react";
import { Input } from "@material-tailwind/react";

const InputText = ({
  label = "",
  isError,
  msgError = "",
  isValid,
  isInvalid,
  isRequired = false,
  customClassName = "",
  ...rest
}) => {
  return (
    <div className="input-custom input-custom-text mb-4">
      <Input
        className={customClassName}
        color="red"
        label={isRequired ? `${label} (*)` : label}
        success={isValid}
        error={typeof isInvalid === "string" ? true : false}
        {...rest}
      />
      {isError && <div className="error-msg">{msgError}</div>}
    </div>
  );
};

export default InputText;
