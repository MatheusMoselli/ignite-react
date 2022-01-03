import Router from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { api } from "../services/api";

type User = {
  email: string;
  permissions: string[];
  roles: string[];
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: User;
};

export const signOut = () => {
  destroyCookie(undefined, "nextauth.token");
  destroyCookie(undefined, "nextauth.refreshToken");
  Router.push("/");
};

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();
    if (token) {
      api
        .get("/me")
        .then((res) => {
          const { email, permissions, roles } = res.data;
          setUser({ email, permissions, roles });
        })
        .catch((err) => {
          signOut();
        });
    }
  }, []);

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const { data } = await api.post("/sessions", {
        email,
        password,
      });

      const { token, refreshToken, permissions, roles } = data;

      setUser({
        email,
        permissions,
        roles,
      });

      setCookie(undefined, "nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      setCookie(undefined, "nextauth.refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      Router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);