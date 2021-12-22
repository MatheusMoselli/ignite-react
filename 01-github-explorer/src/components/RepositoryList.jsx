import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

export const RepositoryList = () => {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem
          repository={{
            name: "repo",
            description: "repo example",
            link: "https://github.com",
          }}
        />
        <RepositoryItem
          repository={{
            name: "repo2",
            description: "repo example2",
            link: "https://github.com",
          }}
        />
        <RepositoryItem
          repository={{
            name: "repo3",
            description: "repo example3",
            link: "https://github.com",
          }}
        />
        <RepositoryItem
          repository={{
            name: "repo4",
            description: "repo example4",
            link: "https://github.com",
          }}
        />
      </ul>
    </section>
  );
};
