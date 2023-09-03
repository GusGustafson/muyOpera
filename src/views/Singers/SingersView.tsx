import { Box, Grid } from "@mui/material";
import Card_Singer from "../../components/Card_Singer/Card_Singer";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";

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

interface SingersViewProps {
    singers: Singer[];
}

const SingersView: React.FC<SingersViewProps> = ({
  // Si no ponemos las llaves, se cree que es un objeto, no una función.
  singers,
  // page,
  // totalPages,
  // onChange,
  // onSearch,
  // searchValue,
}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Header />
      <Navbar_User />
      <Box
        sx={{
          overflow: "scroll",
          maxHeight: "100vh",
        }}
      >
        {/* <SearchBar onChange={onSearch} value={searchValue} /> */}

        <Grid container spacing={1} marginTop={1} marginLeft={7}>
          {singers.map((singer) => {
            const { id, name, surname, voice, birthYear, nationality, website, image } = singer;
            return (
              <Grid item xs={12} md={4} key={id}>
                <Card_Singer
                  id={id}
                  name={name}
                  surname={surname}
                  voice={voice}
                  birthYear={birthYear}
                  nationality={nationality}
                  website={website}
                  image={image}
                />
              </Grid>
            );
          })}
        </Grid>
        {/* <Pagination totalPages={totalPages} page={page} onChange={onChange} /> */}
      </Box>

      {/* ESTO QUE SIGUE ES EL OTRO TIPO DE CARD. LO DESCARTO POR EL DE FRAMER MOTION.
      <div className="container d-flex justify-content-evenly mt-5">
        {singers.map((singer) => (
          <div key={singer.id} className="card" style={{ width: "24rem" }}>
            <img src={singer.image} alt=" imagen de cantante" />
            <div className="contenido-producto">
              <div className="card-titulo">
                <h5>{singer.name} {singer.surname}</h5>
              </div>
              <p>Voz: {singer.voice}</p>
              <p>Año de nacimiento: {singer.birthYear}</p>
              <p>Nacionalidad: {singer.nationality}</p>
            </div>
          </div>
        ))}
      </div> */}

    </Box>
  );
};

export default SingersView;
