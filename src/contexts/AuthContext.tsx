import { createContext, useState, useContext, ReactNode } from "react";
import jwtDecode from "jwt-decode";
import { useTranslation } from "react-i18next";

interface UserDataWithID {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  userRole: number;
  registerDate: string;
  updateDate: string;
}

interface UserValues {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  userRole: number;
  registerDate: string;
  updateDate: string;
}

interface BudgetRequest {
  id: number;
  idUser: number;
  idEvent: number;
  tickets: number | string;
  theatreZone: string;
  travel: string;
  travelLevel: string;
  hotel: string;
  hotelStars: number | string;
  hotelNights: number | string;
  notes: string;
}

interface AuthContextType {
  // user: string | null; // Tengo que incluir "userRole" o dará fallo de TS en la línea 21 de PrivateRoute.tsx.
  // user: { userRole: number } | string | null; // Si lo pongo así, dará fallo de TS en la línea 16 o 22 de PrivateRoute.tsx.
  // user: userRole | string | null; // Si lo pongo así, daba fallo de que no encontraba "userRole" y pasaba lo de "F5 ---> unauthorized".
  user: UserDataWithID | null;
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
  searchWord: (email: string) => void;
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
  searchWord: async (): Promise<void> => {},
});

const USER_KEY = "U_K";
const USER_TOKEN = "U_T";
const FOUND_USER = "F_U";
const EVENT_KEY = "E_K";
const FOUND_WORD = "F_W";

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<UserDataWithID | null>(
    JSON.parse(localStorage.getItem(USER_KEY) || "null")
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { t } = useTranslation();

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
        const user: UserDataWithID | null = jwtDecode(token.jwt);
        console.log("Usuario logueado correctamente");
        setUser(user);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        localStorage.setItem(USER_TOKEN, token.jwt);
        setErrorMessage(null);
      } else {
        console.log("Usuario no válido");
        alert(t("alerts.LOGIN_error"));
        setErrorMessage(t("alerts.LOGIN_message"));
      }
    } catch (error) {
      console.log("Error al iniciar sesión", error);
      throw new Error(error as string);
    }
  }

  function logout() {
    localStorage.clear();
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
        alert(t("alerts.REGISTRATION_success"));
        await login({ email, password });
        setErrorMessage(null);
      } else {
        console.log("Datos de registro de usuario no válidos");
        alert(t("alerts.REGISTRATION_error"));
        setErrorMessage(t("alerts.REGISTRATION_message"));
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
        alert(t("alerts.UPDATEUSERDATA_success"));
        setUser(null);
        localStorage.setItem(USER_KEY, userData.email);
        setErrorMessage(null);
        logout();
      } else {
        console.log(
          "Datos de usuario no válidos. Es posible que ese email ya esté en uso."
        );
        alert(t("alerts.UPDATEUSERDATA_error"));
        setErrorMessage(t("alerts.UPDATEUSERDATA_message"));
      }
    } catch (error) {
      console.log("Error al actualizar los datos de usuario", error);
    }
  }

  // async function searchUser(email: string): Promise<void> {
  async function searchUser(email: string): Promise<UserValues | null> {
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
        // alert(t("alerts.SEARCHUSER_success"));
        localStorage.setItem(FOUND_USER, JSON.stringify(userData));
        setErrorMessage(null);
        return userData;
      } else {
        console.log(
          "Búsqueda fallida. Revisa la dirección e inténtalo de nuevo."
        );
        alert(t("alerts.SEARCHUSER_error"));
        setErrorMessage(t("alerts.SEARCHUSER_message"));
        return null;
      }
    } catch (error) {
      console.log("Error al buscar el usuario", error);
      return null;
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
        alert(t("alerts.DELETEUSER_success"));
        localStorage.removeItem(FOUND_USER);
        setErrorMessage(null);
      } else {
        console.log("Datos de eliminación no válidos");
        alert(t("alerts.DELETEUSER_error"));
        setErrorMessage(t("alerts.DELETEUSER_message"));
      }
    } catch (error) {
      console.log("Error al buscar el usuario", error);
    }
  }

  async function budgetRequest(
    budgetRequestData: BudgetRequest
  ): Promise<void> {
    try {
      const userJSON = localStorage.getItem(USER_KEY);
      const userArray: UserDataWithID | null = userJSON
        ? JSON.parse(userJSON)
        : null;
      if (userArray) {
        budgetRequestData.idUser = userArray!.id;
      }

      const eventJSON = localStorage.getItem(EVENT_KEY);
      const eventArray: BudgetRequest | null = eventJSON
        ? JSON.parse(eventJSON)
        : null;
      if (eventArray) {
        budgetRequestData.idEvent = eventArray!.id;
      }

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
      const notesInput = document.getElementById(
        "notes"
      ) as HTMLInputElement | null;
      if (notesInput) {
        budgetRequestData.notes = notesInput.value;
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
        alert(t("alerts.BUDGETREQUEST_success"));
        setErrorMessage(null);
      } else {
        console.log("Datos no válidos. Debe rellenar todos los campos.");
        alert(t("alerts.BUDGETREQUEST_error"));
        setErrorMessage(t("alerts.BUDGETREQUEST_message"));
      }
    } catch (error) {
      console.log("Error al registrar la solicitud de presupuesto", error);
    }
  }

  async function searchWord(searchQuery: string): Promise<UserValues | null> {
    try {
      const response = await fetch(`http://localhost:3000/object/${searchQuery}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const wordData: UserDataWithID = await response.json();
        console.log("Palabra localizada correctamente");
        // alert(t("alerts.SEARCHWORD_success"));
        localStorage.setItem(FOUND_WORD, JSON.stringify(wordData));
        setErrorMessage(null);
        return wordData;
      } else {
        console.log(
          "Palabra no encontrada en la base de datos. Revisa la palabra e inténtalo de nuevo."
        );
        alert(t("alerts.SEARCHWORD_error"));
        setErrorMessage(t("alerts.SEARCHWORD_message"));
        return null;
      }
    } catch (error) {
      console.log("Error al buscar la palabra", error);
      return null;
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
    searchWord,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
