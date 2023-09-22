import { useEffect, useState } from "react";
import OperasView from "./OperasView";

interface Opera {
  id: number;
  image: string;
  name: string;
  composer: string;
  librettist: string;
  language: string;
  date: number;
  duration: string;
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

export default function Operas() {
  const [operas, setOperas] = useState<Opera[] | null>(null);

  useEffect(
    () => {
      clearLocalStorageKey();
      async function fetchData() {
        try {
          const response = await fetch(
            "http://localhost:3000/opera/allOperas/",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) {
            // setMessage("Ópera no encontrada");
            setOperas(null);
            // alert("Ópera no encontrada");
          } else {
            const data: Opera[] = await response.json();
            setOperas(data);
            // setMessage(null);
          }
        } catch (error) {
          console.error("Error al obtener las óperas:", error);
          setOperas(null);
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
    <OperasView
      operas={operas || []}
    />
  );
}
