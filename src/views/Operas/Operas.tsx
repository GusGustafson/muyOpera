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

export default function Operas() {
  // Aquí va toda la lógica (llamadas a API, cálculos...)
  const [operas, setOperas] = useState<Opera[] | null>(null);
  // const [page, setPage] = useState(1);
  // const [searchValue, setSearchValue] = useState("");
  // const [message, setMessage] = useState("");

  // function handleChange(event, value) {
  // Esta función es la que hace que se cambie de página al hacer clic en los botones correspondientes.
  // setPage(value);
  // }

  // function onSearchCharacter(e) {
  // Esta función es la que hace que funcione el buscador de la SearchBar.
  // setSearchValue(e.target.value);
  // }

  useEffect(
    () => {
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
            alert("Ópera no encontrada");
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
