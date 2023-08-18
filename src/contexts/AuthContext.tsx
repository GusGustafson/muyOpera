import { createContext, useState, useContext, ReactNode } from "react";
import jwtDecode from "jwt-decode";

interface AuthContextType {
  user: string | null;
  errorMessage: null;
  login: (credentials: { email: string; password: string }) => void;
  logout: () => void;
  registration: (userData: {
    name: string;
    surname: string;
    email: string;
    password: string;
  }) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  errorMessage: null,
  login: (): void => {},
  logout: () => {},
  registration: () => {},
});

const USER_KEY = "U_K";
const USER_TOKEN = "U_T";

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState(
    // JSON.parse(localStorage.getItem(USER_KEY) || "{}")
    localStorage.getItem(USER_KEY) || null
  );
  const [errorMessage, setErrorMessage] = useState(null);

  async function login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const token = await response.json();
        const user: string | null = jwtDecode(token.jwt);
        console.log("Usuario logueado correctamente");
        setUser(user);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        localStorage.setItem(USER_TOKEN, token.jwt);
        setErrorMessage(null);
      } else {
        console.log("Usuario no válido");
        alert("Los datos no son correctos. Inténtelo de nuevo.");
        // setErrorMessage("Email o contraseña incorrectos.");
        setErrorMessage(null);
      }
    } catch (error) {
      console.log("Error al iniciar sesión", error);
      throw new Error(error as string);
    }
  }

  function logout() {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(USER_TOKEN);
    setUser(null);
  }

  async function registration({
    name,
    surname,
    email,
    password,
  }: {
    name: string;
    surname: string;
    email: string;
    password: string;
  }) {
    try {
      // Es mejor no usar esta forma de obtener los datos del formulario. Si funciona bien, elimina lo comentado.
      // name = document.getElementById("regName").value;
      // surname = document.getElementById("regSurname").value;
      // email = document.getElementById("regEmail").value;
      // password = document.getElementById("regPassword").value;

      const response = await fetch("http://localhost:3000/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, email, password }),
      });
      if (response.ok) {
        console.log("Usuario nuevo registrado correctamente");
        await login({ email, password });
        setErrorMessage(null);
      } else {
        console.log("Datos de registro de usuario no válidos");
        // setErrorMessage("Datos para registro incorrectos.");
        setErrorMessage(null);
      }
    } catch (error) {
      console.log("Error al registrar usuario", error);
    }
  }

  interface Value {
    user: string | null;
    errorMessage: null;
    login: ({ email, password }: {
      email: string;
      password: string;
  }) => Promise<void>;
  logout: () => void;
  registration: ({ name, surname, email, password }: {
      name: string;
      surname: string;
      email: string;
      password: string;
  }) => void;
  }

  const value: Value = {
    user,
    errorMessage,
    login,
    logout,
    registration,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
