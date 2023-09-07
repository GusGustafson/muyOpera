import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <br />
      <h1>
        <em>La página no existe</em>
      </h1>
      <br />
      <Link to="/home">
        <Button variant="contained" color="warning">
          Haga clic aquí para volver a la página principal
        </Button>
      </Link>
      <Footer />
    </>
  );
}
