import { useEffect, useState } from "react";
import TheatresView from "./TheatresView";

interface Theatre {
  id: number;
  name: string;
  city: string;
  address: string;
  aphoras: number;
  image: string;
}

export default function Theatres() {
  // Aquí va toda la lógica (llamadas a API, cálculos...)
  const [theatres, setTheatres] = useState<Theatre[] | null>(null);
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

  useEffect(() => {
      // De aquí salen los teatros, que se los pasamos a la vista del return.
      async function fetchData() {
        try {
        const response = await fetch(
          // `http://rickandmortyapi.com/api/character/?page=${page}&name=${searchValue}`
          "http://localhost:3000/theatre/allTheatres/", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            // body: JSON.stringify({ email, password }),
          });
        if (!response.ok) {
          // setMessage("Teatro no encontrado");
          setTheatres(null);
          alert("Teatro no encontrado");
        } else {
          // const data: TheatresResponse = await response.json();
          const data: Theatre[] = await response.json();
          setTheatres(data);
          // setMessage(null);
          console.log(data);
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

  return (
    <TheatresView
      theatres={theatres || []}
      // page={page}
      // totalPages={theatres?.info.pages}
      // onChange={handleChange}
      // onSearch={onSearchCharacter}
      // searchValue={searchValue}
      // message={message}
    />
  );
}
