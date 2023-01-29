import React from "react";
import { Textarea } from "@material-tailwind/react";

const InputArea = ({
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
    <div className="input-custom input-custom-area mb-4">
      <Textarea
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

export default InputArea;
