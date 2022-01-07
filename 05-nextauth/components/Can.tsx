import { useCan } from "../hooks/useCan";

interface Props {
  permissions?: string[];
  roles?: string[];
}

export const Can: React.FC<Props> = ({ children, permissions, roles }) => {
  const userCanSeeComponent = useCan({ permissions, roles });
  if (!userCanSeeComponent) return null;

  return <>{children}</>;
};
