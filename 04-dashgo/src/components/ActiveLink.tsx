import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface Props extends LinkProps {
  children: ReactElement;
  exact?: boolean;
}

export const ActiveLink = ({ children, exact = false, ...rest }: Props) => {
  const { asPath } = useRouter();
  let isActive = false;

  if (exact && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !exact &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
};
