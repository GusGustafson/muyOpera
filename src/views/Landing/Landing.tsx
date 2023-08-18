import { Box, Button } from "@mui/material";
import background from "../../assets/theatres/ParisOperaTheatre.jpg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${background})`,
        // backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "32%",
          color: "white",
        }}
      >
        <h2>
          Le damos la bienvenida a{" "}
          <strong>
            <em>muyÓpera</em>
          </strong>
        </h2>
        <Box
        sx={{
          position: "absolute",
          top: "85%",
          left: "32%",
          color: "white",
        }}
      >
        <Link to="/home">
          <Button variant="contained" color="warning">
            Haga clic aquí para entrar
          </Button>
        </Link>
        </Box>
      </Box>
    </Box>
  );
}
