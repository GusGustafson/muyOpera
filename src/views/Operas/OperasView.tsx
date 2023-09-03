import { Box, Grid } from "@mui/material";
import Card_Opera from "../../components/Card_Opera/Card_Opera";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";

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

interface OperasViewProps {
  operas: Opera[];
}

const OperasView: React.FC<OperasViewProps> = ({
  // Si no ponemos las llaves, se cree que es un objeto, no una función.
  operas,
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
          {operas.map((opera) => {
            const { id, name, composer, librettist, language, date, duration, image } = opera;
            return (
              <Grid item xs={12} md={4} key={id}>
                <Card_Opera
                  id={id}
                  name={name}
                  composer={composer}
                  librettist={librettist}
                  language={language}
                  date={date}
                  duration={duration}
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
        {operas.map((opera) => (
          <div key={opera.id} className="card" style={{ width: "24rem" }}>
            <img src={opera.image} alt="ópera" />
            <div className="contenido-producto">
              <div className="card-titulo">
                <h5>{opera.name}</h5>
              </div>
              <p>Compositor: {opera.composer}</p>
              <p>Idioma: {opera.language}</p>
              <p>Fecha: {opera.date}</p>
            </div>
          </div>
        ))}
      </div> */}
      
    </Box>
  );
};

export default OperasView;
