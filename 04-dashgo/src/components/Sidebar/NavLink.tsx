import {
  Icon,
  Text,
  Link,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import NextLink from "next/link";
import { ActiveLink } from "../ActiveLink";

interface Props extends ChakraLinkProps {
  icon: ElementType;
  href: string;
}

export const NavLink: React.FC<Props> = ({ icon, children, href, ...rest }) => {
  return (
    <ActiveLink href={href} passHref>
      <Link display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </Link>
    </ActiveLink>
  );
};
