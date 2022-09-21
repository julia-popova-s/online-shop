import { useState, useEffect } from "react";

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          if (value.length < validations[validation] && value.length > 0) {
            setMinLengthError(true);
            setMessage("Поле должно содержать не менее 4-х символов");
          } else {
            setMinLengthError(false);
            setMessage("");
          }
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);

          break;
        default:
          break;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || minLengthError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError]);

  return {
    isEmpty,
    minLengthError,
    inputValid,
    setInputValid,
    message,
    setMessage,
  };
};
