import { useAuth } from "../contexts/AuthContext";

export default () => {
  const { user } = useAuth();
  return <h1>Hello {user?.email}</h1>;
};
