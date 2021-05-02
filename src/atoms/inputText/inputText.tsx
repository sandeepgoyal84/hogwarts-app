import * as React from "react";

type Props = Readonly<{
  id?: string;
  value?: string;
  maxLength?: number;
  readOnly: boolean;
  size: "tiny" | "small" | "medium" | "large";
  isEnabled: boolean;
  isOverrideClassName: boolean;
  onFocus?: (value: string, id?: string) => void;
  onChange: (value: string, id?: string) => void;
  onBlur?: (value: string, id?: string) => void;
  onKeyUp?: (event?: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  autoCorrect?: string;
  autoCapitalize?: string;
  spellCheck?: boolean;
  className?: string;
  title?: string | null | undefined;
  "data-test-id"?: string;
}>;

const InputText = (props: Props) => {
  const { type, className } = props;
  return (
    <input
      data-test-id={props["data-test-id"]}
      type={type}
      className={className}
    ></input>
  );
};

export default InputText;
