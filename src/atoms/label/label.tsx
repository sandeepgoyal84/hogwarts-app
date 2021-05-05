import * as React from "react";

type Props = Readonly<{
  children?: React.ReactNode;
  "data-testid"?: string;
}>;

const Label = (props: Props) => {
  const { children } = props;
  return <span data-testid={props["data-testid"]}>{children}</span>;
};

export default Label;
