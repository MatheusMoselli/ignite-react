import { useAuth } from "../contexts/AuthContext";
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default () => {
  const { user } = useAuth();
  return <h1>Hello {user?.email}</h1>;
};

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const { data } = await apiClient.get("/me");
  return {
    props: {},
  };
});
