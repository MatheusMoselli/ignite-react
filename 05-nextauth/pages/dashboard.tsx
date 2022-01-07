import { Can } from "../components/Can";
import { useAuth } from "../contexts/AuthContext";
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default () => {
  const { user, signOut } = useAuth();

  return (
    <div>
      <h1>Hello {user?.email}</h1>
      <Can permissions={["metrics.list"]}>
        <div>Metrics</div>
      </Can>
      <button onClick={signOut}>Sair</button>
    </div>
  );
};

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  return {
    props: {},
  };
});
