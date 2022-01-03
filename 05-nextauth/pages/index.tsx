import { GetServerSideProps } from "next";
import { FormEvent, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { parseCookies } from "nookies";
import styles from "../styles/Home.module.css";
import { withSSRGuest } from "../utils/withSSRGuest";

export default () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    signIn(data);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
