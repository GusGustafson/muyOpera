import { useEffect, useState } from "react";
import OperasView from "./OperasView";

interface Opera {
  id: number;
  image: string;
  name: string;
  composer: string;
  language: string;
  date: number;
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
      // De aquí salen las óperas, que se las pasamos a la vista del return.
      async function fetchData() {
        try {
          const response = await fetch(
            // `http://rickandmortyapi.com/api/character/?page=${page}&name=${searchValue}`
            "http://localhost:3000/opera/allOperas/",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              // body: JSON.stringify({ email, password }),
            }
          );
          if (!response.ok) {
            // setMessage("Ópera no encontrada");
            setOperas(null);
            alert("Ópera no encontrada");
          } else {
            // const data: OperasResponse = await response.json();
            const data: Opera[] = await response.json();
            setOperas(data);
            // setMessage(null);
            console.log(data);
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
      // page={page}
      // totalPages={theatres?.info.pages}
      // onChange={handleChange}
      // onSearch={onSearchCharacter}
      // searchValue={searchValue}
      // message={message}
    />
  );
}
