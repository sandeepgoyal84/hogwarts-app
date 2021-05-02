import * as React from "react";

type Props = Readonly<{
  children?: React.ReactNode;
  "data-test-id"?: string;
}>;

function Label({ children, "data-test-id": dataTestId }: Props) {
  return <span data-test-id={dataTestId}>{children}</span>;
}

export default Label;
