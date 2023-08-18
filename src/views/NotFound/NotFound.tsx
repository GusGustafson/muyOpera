import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <br />
      <h1>
        <em>La página no existe</em>
      </h1>
      <br />
      <Link to="/home">
        <Button variant="contained">
          Haga clic aquí para volver a la entrada principal
        </Button>
      </Link>
    </>
  );
}
