interface EventDataWithID {
    id: string;
    idTheatre: string;
    idOpera: string;
    idSinger1: string;
    idSinger2: string;
    dateTime: string;
  }

const FOUND_THEATRE = "F_T";

async function searchEvent(idTheatre: string, idOpera: string, idSinger1: string, idSinger2: string): Promise<void> {
    try {
      const idTheatreInput = document.getElementById(
        "idTheatre"
      ) as HTMLInputElement | null;
      if (idTheatreInput) {
        idTheatre = idTheatreInput.value;
      }
      const idOperaInput = document.getElementById(
        "idOpera"
      ) as HTMLInputElement | null;
      if (idOperaInput) {
        idOpera = idOperaInput.value;
      }
      const idSinger1Input = document.getElementById(
        "idSinger1"
      ) as HTMLInputElement | null;
      if (idSinger1Input) {
        idSinger1 = idSinger1Input.value;
      }
      const idSinger2Input = document.getElementById(
        "idSinger2"
      ) as HTMLInputElement | null;
      if (idSinger2Input) {
        idSinger2 = idSinger2Input.value;
      }

      const response = await fetch(
        `http://localhost:3000/theatre/${idTheatre}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const theatreData: EventDataWithID = await response.json();
        console.log("Teatro localizado correctamente");
        alert(
          "Teatro localizado correctamente."
        );
        localStorage.setItem(FOUND_THEATRE, JSON.stringify(theatreData));
      } else {
        console.log("Búsqueda fallida. Revisa el nombre e inténtalo de nuevo.");
        alert("Búsqueda fallida. Revisa el nombre e inténtalo de nuevo.");
      }
    } catch (error) {
      console.log("Error al buscar el teatro", error);
    }
  }

export default searchEvent;
