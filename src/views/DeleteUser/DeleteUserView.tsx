import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
import "../../style.css";
import { useTranslation } from "react-i18next";

const FOUND_USER = "F_U";

interface FoundUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  userRole: number;
  registerDate: string;
  updateDate: string;
}

interface DeleteUserViewProps {
  onSubmit: () => void;
}

export default function DeleteUserView(props: DeleteUserViewProps) {
  const foundUserJSON = localStorage.getItem(FOUND_USER);
  const foundUser: FoundUser | null = foundUserJSON
    ? JSON.parse(foundUserJSON)
    : null;
  const { t } = useTranslation();

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
              <h3>{t("DELETEUSER_title")}</h3>
              <p>{t("DELETEUSER_p1")}</p>
              <h4>{t("DELETEUSER_subtitle")}</h4>
              <h5>
                {t("DELETEUSER_id")}{" "}
                <span id="userFoundId">{foundUser?.id}</span>
              </h5>
              <h5>
                {t("DELETEUSER_name")} {foundUser?.name}
              </h5>
              <h5>
                {t("DELETEUSER_surname")} {foundUser?.surname}
              </h5>
              <h5>
                {t("DELETEUSER_email")} {foundUser?.email}
              </h5>
              <h5>
                {t("DELETEUSER_userRole")} {foundUser?.userRole}
              </h5>
              <Button
                id="deleteUserButton"
                // type="button"
                // fullWidth
                variant="contained"
                sx={{ mt: 1 }}
                size="large"
                color="warning"
                onClick={props.onSubmit}
              >
                {t("DELETEUSER_button")}
              </Button>
              <br />
              <br />
              <div className="registro">
                <Link to="/admin">{t("DELETEUSER_link")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Box>
  );
}
