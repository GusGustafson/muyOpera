import { useEffect, useState } from "react";
import SingersView from "./SingersView";

interface Singer {
  id: number;
  image: string;
  name: string;
  surname: string;
  voice: string;
  birthYear: number;
  nationality: string;
  website: string;
}

const clearLocalStorageKey = () => {
  localStorage.removeItem('T_K');
  localStorage.removeItem('O_K');
  localStorage.removeItem('S_K');
  localStorage.removeItem('E_K');
  localStorage.removeItem('F_E');
  localStorage.removeItem('F_U');
  localStorage.removeItem('F_W');
};

export default function Singers() {
  const [singers, setSingers] = useState<Singer[] | null>(null);

  useEffect(
    () => {
      clearLocalStorageKey();
      async function fetchData() {
        try {
          const response = await fetch(
            "http://localhost:3000/singer/allSingers/",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) {
            // setMessage("Cantante no encontrado");
            setSingers(null);
            // alert("Cantante no encontrado");
          } else {
            const data: Singer[] = await response.json();
            setSingers(data);
            // setMessage(null);
          }
        } catch (error) {
          console.error("Error al obtener los cantantes:", error);
          setSingers(null);
        }
      }
      fetchData();
    },
    // [page, searchValue]
    []
  );
  // Estos corchetes de arriba los ponemos vacíos en otros hooks useEffect que llevan fetch sin "parámetros $" para evitar
  // que se ejecute ese useEffect en todos y cada uno de los render que haga con el setCharacters.

  return (
    <SingersView
      singers={singers || []}
    />
  );
}
