import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default () => {
  return (
    <div>
      <h1>Metrics</h1>
    </div>
  );
};

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = setupAPIClient(ctx);

    return {
      props: {},
    };
  },
  {
    permissions: ["metrics.create"],
    roles: ["administrator"],
  }
);
