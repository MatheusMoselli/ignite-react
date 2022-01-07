import { useAuth } from "../contexts/AuthContext";
import { validateUserPermissions } from "../utils/validateUserPermissions";

type UseCanParams = {
  permissions?: string[];
  roles?: string[];
};

export const useCan = ({ permissions, roles }: UseCanParams) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) return false;

  return validateUserPermissions({
    user,
    permissions,
    roles,
  });
};
