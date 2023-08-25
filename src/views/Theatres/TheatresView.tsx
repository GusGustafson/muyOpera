import { Box, Grid } from "@mui/material";
import Card_Theatre from "../../components/Card_Theatre/Card_Theatre";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";

interface Theatre {
  id: number;
  name: string;
  city: string;
  address: string;
  aphoras: number;
  image: string;
}

interface TheatresViewProps {
  theatres: Theatre[];
}

const TheatresView: React.FC<TheatresViewProps> = ({
  // Si no ponemos las llaves, se cree que es un objeto, no una función.
  theatres,
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
          {theatres.map((theatre) => {
            const { id, name, city, address, aphoras, image } = theatre;
            return (
              <Grid item xs={12} md={4} key={id}>
                <Card_Theatre
                  id={id}
                  name={name}
                  city={city}
                  address={address}
                  aphoras={aphoras}
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
        {theatres.map((theatre) => (
          <div key={theatre.id} className="card" style={{ width: "24rem" }}>
            <img src={theatre.image} alt=" imagen de teatro" />
            <div className="contenido-producto">
              <div className="card-titulo">
                <h5>{theatre.name}</h5>
              </div>
              <p>Ciudad: {theatre.city}</p>
              <p>Dirección: {theatre.address}</p>
              <p>Aforo: {theatre.aphoras}</p>
            </div>
          </div>
        ))}
      </div> */}

    </Box>
  );
};

export default TheatresView;
