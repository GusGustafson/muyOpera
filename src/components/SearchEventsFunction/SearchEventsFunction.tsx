interface EventValues {
  id: number;
  idTheatre: number;
  theatreName: string;
  idOpera: number;
  operaName: string;
  idSinger1: number;
  singer1Fullname: string;
  idSinger2: number;
  singer2Fullname: string;
  singerAnyFullname: string;
  dateTime: string;
}

const FOUND_EVENTS = "F_E";

  async function searchEventsFunction(): Promise<EventValues[] | null> {
    try {
    const idTheatreInput = document.getElementById(
      "idTheatre"
    ) as HTMLInputElement | null;
    const theatreNameInput = document.getElementById(
      "theatreName"
    ) as HTMLInputElement | null;
    const idOperaInput = document.getElementById(
      "idOpera"
    ) as HTMLInputElement | null;
    const operaNameInput = document.getElementById(
      "operaName"
    ) as HTMLInputElement | null;
    const idSinger1Input = document.getElementById(
      "idSinger1"
    ) as HTMLInputElement | null;
    const singer1FullnameInput = document.getElementById(
      "singer1Fullname"
    ) as HTMLInputElement | null;
    const idSinger2Input = document.getElementById(
      "idSinger2"
    ) as HTMLInputElement | null;
    const singer2FullnameInput = document.getElementById(
      "singer2Fullname"
    ) as HTMLInputElement | null;
    const singerAnyFullnameInput = document.getElementById(
      "singerAnyFullname"
    ) as HTMLInputElement | null;

    const idTheatre = idTheatreInput ? idTheatreInput.value : "";
    const theatreName = theatreNameInput ? theatreNameInput.value : "";
    const idOpera = idOperaInput ? idOperaInput.value : "";
    const operaName = operaNameInput ? operaNameInput.value : "";
    const idSinger1 = idSinger1Input ? idSinger1Input.value : "";
    const singer1Fullname = singer1FullnameInput
      ? singer1FullnameInput.value
      : "";
    const idSinger2 = idSinger2Input ? idSinger2Input.value : "";
    const singer2Fullname = singer2FullnameInput
      ? singer2FullnameInput.value
      : "";
    const singerAnyFullname = singerAnyFullnameInput
      ? singerAnyFullnameInput.value
      : "";

    const requestBody = {
      idTheatre,
      theatreName,
      idOpera,
      operaName,
      idSinger1,
      singer1Fullname,
      idSinger2,
      singer2Fullname,
      singerAnyFullname,
    };

    const url = "http://localhost:3000/event/eventsWithConditions";

    const response = await fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );
    if (response.ok) {
      const eventsData: EventValues[] = await response.json();
      console.log("Eventos localizados correctamente");
      // alert("Eventos localizados correctamente.");
      localStorage.setItem(FOUND_EVENTS, JSON.stringify(eventsData));
      return eventsData;
    } else {
      console.log(
        "Búsqueda fallida. Revise el contenido de los campos e inténtelo de nuevo."
      );
      // alert(t("alerts.SEARCHEVENT_error"));
      return null;
    }
  } catch (error) {
    console.log("Error al buscar los eventos", error);
    return null;
  }
}

export default searchEventsFunction;
