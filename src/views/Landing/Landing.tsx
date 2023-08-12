import { Box } from "@mui/material";
import background from "../../assets/theatres/ParisOperaTheatre.jpg";

export default function Home() {
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
          <h2>Le damos la bienvenida a <strong><em>muyÓpera</em></strong></h2>
        </Box>
      </Box>
  );
}
