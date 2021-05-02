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
  "data-test-id"?: string;
}>;

const Heading = (props: Props) => {
  const { children, type, className } = props;
  const HeadingTag = TAG_MAP[type];

  return (
    // @ts-expect-error Typescript doesn't understand this funky jsx
    <HeadingTag className={className} data-test-id={props["data-test-id"]}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
