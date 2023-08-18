import { createContext, useState, useContext, ReactNode } from "react";
import jwtDecode from "jwt-decode";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  errorMessage: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  registration: (userData: {
    name: string;
    surname: string;
    email: string;
    password: string;
  }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
console.log(AuthContext);

const USER_KEY = "U_K";
const USER_TOKEN = "U_T";

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem(USER_KEY) || "{}")
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
        const decodedUser: User = jwtDecode(token.jwt);
        console.log("Usuario logueado correctamente");
        setUser(decodedUser);
        localStorage.setItem(USER_KEY, JSON.stringify(decodedUser));
        localStorage.setItem(USER_TOKEN, token.jwt);
        setErrorMessage(null);
      } else {
        console.log("Usuario no válido");
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

  const value: AuthContextType = {
    user,
    errorMessage,
    login,
    logout,
    registration,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useAuthContext debe utilizarse dentro de un AuthContextProvider"
    );
  }
  return context;
}
