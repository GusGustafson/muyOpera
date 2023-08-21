import { createContext, useState, useContext, ReactNode } from "react";
import jwtDecode from "jwt-decode";

interface UserData {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: UserData | null;
  errorMessage: string | null;
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
  registration: (userData: {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
  }) => void;
  updateUserData: (userData: UserData) => void;
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
  const [user, setUser] = useState<UserData | null>(
    JSON.parse(localStorage.getItem(USER_KEY) || "null")
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
        const tokenData = await response.json();
        const decodedToken: UserData | null = jwtDecode(tokenData.jwt);
        console.log("Usuario logueado correctamente");
        setUser(decodedToken);
        localStorage.setItem(USER_KEY, JSON.stringify(decodedToken));
        localStorage.setItem(USER_TOKEN, tokenData.jwt);
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

  async function registration(userData: UserData): Promise<void> {
    try {
      /* const nameInput = document.getElementById(
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
      } */

      const response = await fetch("http://localhost:3000/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        console.log("Usuario nuevo registrado correctamente");
        alert("Usuario nuevo registrado correctamente");
        await login({ email: userData.email, password: userData.password });
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

  async function updateUserData(updatedUserData: UserData): Promise<void> {
    try {
      /* const nameInput = document.getElementById(
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
      } */

      const token = localStorage.getItem(USER_TOKEN);
      /* const userJSON = localStorage.getItem(USER_KEY);
      const userArray: UserData | null = userJSON ? JSON.parse(userJSON) : null;
      console.log(token);
      console.log(userArray);
      console.log(userData); */
      console.log(user);
      console.log(updatedUserData);
      const response = await fetch(`http://localhost:3000/user/${user?.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ updatedUserData }), // Aquí es donde falla. No envía bien el objeto userData. ¿Puede estar el fallo en stringify?
      });
      if (response.ok) {
        console.log("Datos de usuario actualizados correctamente");
        alert(
          "Datos de usuario actualizados correctamente. Por seguridad, vuelva a iniciar sesión con sus datos de usuario actualizados."
        );
        setUser(null);
        localStorage.setItem(USER_KEY, JSON.stringify(updatedUserData.email));
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
