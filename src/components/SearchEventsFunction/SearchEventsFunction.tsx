interface EventDataWithID {
  id: string;
  idTheatre: string;
  idOpera: string;
  idSinger1: string;
  idSinger2: string;
  dateTime: string;
}

const FOUND_EVENTS = "F_E";

async function searchEventsFunction(): Promise<void> {
  try {
    const idTheatreInput = document.getElementById(
      "idTheatre"
    ) as HTMLInputElement | null;
    const idOperaInput = document.getElementById(
      "idOpera"
    ) as HTMLInputElement | null;
    const idSinger1Input = document.getElementById(
      "idSinger1"
    ) as HTMLInputElement | null;
    const idSinger2Input = document.getElementById(
      "idSinger2"
    ) as HTMLInputElement | null;

    const idTheatre = idTheatreInput ? idTheatreInput.value : "";
    const idOpera = idOperaInput ? idOperaInput.value : "";
    const idSinger1 = idSinger1Input ? idSinger1Input.value : "";
    const idSinger2 = idSinger2Input ? idSinger2Input.value : "";

    // comento las siguientes líneas porque eran las que hacían uso de GET en vez de POST:
    // const queryParams = new URLSearchParams({
    //   idTheatre,
    //   idOpera,
    //   idSinger1,
    //   idSinger2,
    // });
    const requestBody = {
      idTheatre,
      idOpera,
      idSinger1,
      idSinger2,
    };

    // comento la siguiente línea porque era la que hacía uso de GET en vez de POST:
    // const url = `http://localhost:3000/event/eventsWithConditions?${queryParams.toString()}`;
    const url = "http://localhost:3000/event/eventsWithConditions";

    const response = await fetch(
      // comento la siguiente línea porque era la que hacía uso de GET en vez de POST:
      // "http://localhost:3000/event/eventsWithConditions",
      url,
      {
        // comento la siguiente línea porque era la que hacía uso de GET en vez de POST:
        // method: "GET",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );
    if (response.ok) {
      const eventsData: EventDataWithID[] = await response.json();
      console.log("Eventos localizados correctamente");
      alert("Eventos localizados correctamente.");
      localStorage.setItem(FOUND_EVENTS, JSON.stringify(eventsData));
    } else {
      console.log("Búsqueda fallida. Revise los campos e inténtelo de nuevo.");
      alert("Búsqueda fallida. Revise los campos e inténtelo de nuevo.");
    }
  } catch (error) {
    console.log("Error al buscar los eventos", error);
  }
}

export default searchEventsFunction;
