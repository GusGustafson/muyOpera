import { createContext, useState, useContext, ReactNode } from "react";
import jwtDecode from "jwt-decode";

interface UserDataWithID {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface BudgetRequest {
  id: number;
  idUser: string;
  // dateTime: string;
  idEvent: string;
  tickets: string;
  theatreZone: string;
  travel: string;
  travelLevel: string;
  hotel: string;
  hotelStars: string;
  hotelNights: string;
  // requestStatus: string;
}

interface AuthContextType {
  // user: string | null; // Tengo que incluir "userRole" o dará fallo de TS en la línea 21 de PrivateRoute.tsx.
  // user: { userRole: number } | string | null; // Si lo pongo así, dará fallo de TS en la línea 16 o 22 de PrivateRoute.tsx.
  user: userRole | string | null;
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
  searchUser: (email: string) => void;
  deleteUser: (id: number) => void;
  budgetRequest: (budgetRequestData: BudgetRequest) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  errorMessage: null,
  login: async (): Promise<void> => {},
  logout: () => {},
  registration: async (): Promise<void> => {},
  updateUserData: async (): Promise<void> => {},
  searchUser: async (): Promise<void> => {},
  deleteUser: async (): Promise<void> => {},
  budgetRequest: async (): Promise<void> => {},
});

const USER_KEY = "U_K";
const USER_TOKEN = "U_T";
const FOUND_USER = "F_U";
// const FOUND_EVENTS = "F_E";
const EVENT_KEY = "E_K";
// const THEATRE_KEY = "T_K";
// const OPERA_KEY = "O_K";
// const SINGER_KEY = "S_K";

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<string | null>(
    localStorage.getItem(USER_KEY) || null
  );
  console.log(user);
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
    localStorage.clear();
    // localStorage.removeItem(USER_KEY);
    // localStorage.removeItem(USER_TOKEN);
    // localStorage.removeItem(FOUND_USER);
    // localStorage.removeItem(FOUND_EVENTS);
    // localStorage.removeItem(EVENT_KEY);
    // localStorage.removeItem(THEATRE_KEY);
    // localStorage.removeItem(OPERA_KEY);
    // localStorage.removeItem(SINGER_KEY);
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

  async function searchUser(email: string): Promise<void> {
    try {
      const emailInput = document.getElementById(
        "email"
      ) as HTMLInputElement | null;
      if (emailInput) {
        email = emailInput.value;
      }

      const response = await fetch(`http://localhost:3000/user/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const userData: UserDataWithID = await response.json();
        console.log("Usuario localizado correctamente");
        alert("Usuario localizado correctamente.");
        localStorage.setItem(FOUND_USER, JSON.stringify(userData));
        setErrorMessage(null);
      } else {
        console.log(
          "Búsqueda fallida. Revisa la dirección e inténtalo de nuevo."
        );
        alert("Búsqueda fallida. Revisa la dirección e inténtalo de nuevo.");
        setErrorMessage("Búsqueda fallida");
      }
    } catch (error) {
      console.log("Error al buscar el usuario", error);
    }
  }

  async function deleteUser(id: number): Promise<void> {
    try {
      const idInput = document.getElementById(
        "userFoundId"
      ) as HTMLInputElement | null;

      if (idInput) {
        const inputValue = idInput.value;
        const numericValue = parseInt(inputValue, 10);
        if (!isNaN(numericValue)) {
          id = numericValue;
        }
      }

      const token = localStorage.getItem(USER_TOKEN);

      const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log("Cuenta de usuario eliminada correctamente");
        alert("Cuenta de usuario eliminada correctamente.");
        localStorage.removeItem(FOUND_USER);
        setErrorMessage(null);
      } else {
        console.log("Datos de eliminación no válidos");
        alert("Datos de eliminación no válidos");
        setErrorMessage("Eliminación incorrecta");
      }
    } catch (error) {
      console.log("Error al buscar el usuario", error);
    }
  }

  async function budgetRequest(
    budgetRequestData: BudgetRequest
  ): Promise<void> {
    try {
      const idUserInput = document.getElementById(
        "idUser"
      ) as HTMLInputElement | null;
      if (idUserInput) {
        budgetRequestData.idUser = idUserInput.value;
      }
      // const dateTimeInput = document.getElementById(
      //   "dateTime"
      // ) as HTMLInputElement | null;
      // if (dateTimeInput) {
      //   dateTime = dateTimeInput.value;
      // }

      // const idEventInput = document.getElementById(
      //   "idEvent"
      // ) as HTMLInputElement | null;
      // if (idEventInput) {
      //   budgetRequestData.idEvent = idEventInput.value;
      // }

      const ticketsInput = document.getElementById(
        "tickets"
      ) as HTMLInputElement | null;
      if (ticketsInput) {
        budgetRequestData.tickets = ticketsInput.value;
      }
      const theatreZoneInput = document.getElementById(
        "theatreZone"
      ) as HTMLInputElement | null;
      if (theatreZoneInput) {
        budgetRequestData.theatreZone = theatreZoneInput.value;
      }
      const travelInput = document.getElementById(
        "travel"
      ) as HTMLInputElement | null;
      if (travelInput) {
        budgetRequestData.travel = travelInput.value;
      }
      const travelLevelInput = document.getElementById(
        "travelLevel"
      ) as HTMLInputElement | null;
      if (travelLevelInput) {
        budgetRequestData.travelLevel = travelLevelInput.value;
      }
      const hotelInput = document.getElementById(
        "hotel"
      ) as HTMLInputElement | null;
      if (hotelInput) {
        budgetRequestData.hotel = hotelInput.value;
      }
      const hotelStarsInput = document.getElementById(
        "hotelStars"
      ) as HTMLInputElement | null;
      if (hotelStarsInput) {
        budgetRequestData.hotelStars = hotelStarsInput.value;
      }
      const hotelNightsInput = document.getElementById(
        "hotelNights"
      ) as HTMLInputElement | null;
      if (hotelNightsInput) {
        budgetRequestData.hotelNights = hotelNightsInput.value;
      }

      const eventJSON = localStorage.getItem(EVENT_KEY);
      const eventArray: BudgetRequest | null = eventJSON
        ? JSON.parse(eventJSON)
        : null;

      if (eventArray) {
        budgetRequestData.idEvent = eventArray!.idEvent;
      }

      const response = await fetch("http://localhost:3000/budgetRequest/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(budgetRequestData),
      });
      if (response.ok) {
        console.log("Solicitud de presupuesto registrada correctamente");
        alert("Solicitud de presupuesto registrada correctamente");
        // await login({ email, password });
        setErrorMessage(null);
      } else {
        console.log("Datos de solicitud de presupuesto no válidos");
        alert("Datos de solicitud de presupuesto no válidos");
        setErrorMessage("Datos de solicitud de presupuesto no válidos");
      }
    } catch (error) {
      console.log("Error al registrar la solicitud de presupuesto", error);
    }
  }

  const value: AuthContextType = {
    user,
    errorMessage,
    login,
    logout,
    registration,
    updateUserData,
    searchUser,
    deleteUser,
    budgetRequest,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
