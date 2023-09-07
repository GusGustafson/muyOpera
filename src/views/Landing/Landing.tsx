import { Box, Button } from "@mui/material";
import background from "../../assets/theatres/ParisOperaTheatre.jpg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Box
      sx={{
        // position: "relative",
        backgroundImage: `url(${background})`,
        // backgroundPosition: "center",
        backgroundPositionX: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
        }}
      >
        <h2>
          Le damos la bienvenida a{" "}
          <strong>
            <em>muyÓpera</em>
          </strong>
        </h2>
        </Box>
        <Box
        sx={{
          position: "absolute",
          bottom: "4%",
          left: "50%",
          transform: "translateX(-50%)",
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
  );
}
