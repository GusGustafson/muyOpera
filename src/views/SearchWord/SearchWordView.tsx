// import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
import SearchWordPage from "../../components/SearchWordPage/SearchWordPage";
import "../../style.css";

const FOUND_WORD = "F_W";

interface FoundObject {
  id: number;
  name: string;
  city: string;
  address: string;
  aphoras: string;
  telephone: string;
  website: string;
  image: string;
}

export default function SearchWordView() {
  const foundWordJSON = localStorage.getItem(FOUND_WORD);
  const foundWord: FoundObject[] | null = foundWordJSON
    ? JSON.parse(foundWordJSON)
    : null;
  console.log(foundWord);

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
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="caja destacado">
              <SearchWordPage />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Box>
  );
}
