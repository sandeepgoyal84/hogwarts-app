import * as React from "react";

const TAG_MAP = {
  primary: "h1",
  secondary: "h2",
  tertiary: "h3",
};

type Props = Readonly<{
  children?: React.ReactNode;
  type: "primary" | "secondary" | "tertiary";
  className?: string;
  "data-testid"?: string;
}>;

const Heading = (props: Props) => {
  const { children, type, className, "data-testid": dataTestId } = props;
  const HeadingTag = TAG_MAP[type];

  return (
    // @ts-expect-error
    <HeadingTag className={className} data-testid={dataTestId}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
