import { useEffect, useState } from "react";
import TheatresView from "./TheatresView";

interface Theatre {
  id: number;
  name: string;
  city: string;
  address: string;
  aphoras: number;
  telephone: number;
  website: string;
  image: string;
}

const clearLocalStorageKey = () => {
  localStorage.removeItem("T_K");
  localStorage.removeItem("O_K");
  localStorage.removeItem("S_K");
  localStorage.removeItem("E_K");
  localStorage.removeItem("F_E");
  localStorage.removeItem("F_U");
  localStorage.removeItem("F_W");
};

export default function Theatres() {
  const [theatres, setTheatres] = useState<Theatre[] | null>(null);

  useEffect(
    () => {
      clearLocalStorageKey();
      async function fetchData() {
        try {
          const response = await fetch(
            "http://localhost:3000/theatre/allTheatres/",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) {
            // setMessage("Teatro no encontrado");
            setTheatres(null);
            // alert("Teatro no encontrado");
          } else {
            const data: Theatre[] = await response.json();
            data.sort((a, b) => (a.name > b.name ? 1 : -1));
            setTheatres(data);
            // setMessage(null);
          }
        } catch (error) {
          console.error("Error al obtener los teatros:", error);
          setTheatres(null);
        }
      }
      fetchData();
    },
    // [page, searchValue]
    []
  );
  // Estos corchetes de arriba los ponemos vacíos en otros hooks useEffect que llevan fetch sin "parámetros $" para evitar
  // que se ejecute ese useEffect en todos y cada uno de los render que haga con el setCharacters.

  return <TheatresView theatres={theatres || []} />;
}
