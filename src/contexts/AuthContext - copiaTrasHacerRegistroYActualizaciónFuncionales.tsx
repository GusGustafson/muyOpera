import { createContext, useState, useContext, ReactNode } from "react";
import jwtDecode from "jwt-decode";

interface UserDataWithID {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: string | null;
  errorMessage: string | null;
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
  registration: ({
    name,
    surname,
    email,
    password,
  }: {
    name: string;
    surname: string;
    email: string;
    password: string;
  }) => void;
  updateUserData: (userData: UserDataWithID) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  errorMessage: null,
  login: async (): Promise<void> => {},
  logout: () => {},
  registration: async (): Promise<void> => {},
  updateUserData: async (): Promise<void> => {},
});

const USER_KEY = "U_K";
const USER_TOKEN = "U_T";

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<string | null>(
    localStorage.getItem(USER_KEY) || null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
        setErrorMessage("Los datos no son correctos.");
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
  }): Promise<void> {
    try {
      const nameInput = document.getElementById(
        "name"
      ) as HTMLInputElement | null;
      if (nameInput) {
        name = nameInput.value;
      }
      const surnameInput = document.getElementById(
        "surname"
      ) as HTMLInputElement | null;
      if (surnameInput) {
        surname = surnameInput.value;
      }
      const emailInput = document.getElementById(
        "email"
      ) as HTMLInputElement | null;
      if (emailInput) {
        email = emailInput.value;
      }
      const passwordInput = document.getElementById(
        "password"
      ) as HTMLInputElement | null;
      if (passwordInput) {
        password = passwordInput.value;
      }

      const response = await fetch("http://localhost:3000/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, email, password }),
      });
      if (response.ok) {
        console.log("Usuario nuevo registrado correctamente");
        alert("Usuario nuevo registrado correctamente");
        await login({ email, password });
        setErrorMessage(null);
      } else {
        console.log("Datos de registro de usuario no válidos");
        alert("Datos de registro de usuario no válidos");
        setErrorMessage("Datos de registro de usuario no válidos");
      }
    } catch (error) {
      console.log("Error al registrar usuario", error);
    }
  }

  async function updateUserData(userData: UserDataWithID): Promise<void> {
    try {
      const nameInput = document.getElementById(
        "name"
      ) as HTMLInputElement | null;
      if (nameInput) {
        userData.name = nameInput.value;
      }
      const surnameInput = document.getElementById(
        "surname"
      ) as HTMLInputElement | null;
      if (surnameInput) {
        userData.surname = surnameInput.value;
      }
      const emailInput = document.getElementById(
        "email"
      ) as HTMLInputElement | null;
      if (emailInput) {
        userData.email = emailInput.value;
      }
      const passwordInput = document.getElementById(
        "password"
      ) as HTMLInputElement | null;
      if (passwordInput) {
        userData.password = passwordInput.value;
      }

      const token = localStorage.getItem(USER_TOKEN);
      const userJSON = localStorage.getItem(USER_KEY);
      const userArray: UserDataWithID | null = userJSON
        ? JSON.parse(userJSON)
        : null;
      const response = await fetch(
        `http://localhost:3000/user/${userArray!.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userData), // Aquí es donde fallaba. No enviaba bien el objeto userData por ponerlo entre llaves.
        }
      );
      if (response.ok) {
        console.log("Datos de usuario actualizados correctamente");
        alert(
          "Datos de usuario actualizados correctamente. Por seguridad, vuelva a iniciar sesión con sus datos de usuario actualizados."
        );
        setUser(null);
        localStorage.setItem(USER_KEY, userData.email);
        setErrorMessage(null);
        logout();
      } else {
        console.log("Datos de usuario no válidos");
        alert("Datos de usuario no válidos");
        setErrorMessage("Datos para actualización incorrectos");
      }
    } catch (error) {
      console.log("Error al actualizar los datos de usuario", error);
    }
  }

  const value: AuthContextType = {
    user,
    errorMessage,
    login,
    logout,
    registration,
    updateUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
