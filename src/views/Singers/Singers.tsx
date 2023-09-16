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

export default function Singers() {
  // Aquí va toda la lógica (llamadas a API, cálculos...)
  const [singers, setSingers] = useState<Singer[] | null>(null);
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
