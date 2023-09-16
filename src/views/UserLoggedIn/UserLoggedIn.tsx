import { useEffect } from "react";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
// import Ecco from "../../assets/AngelesCastro_EccoRespiroAppena.mp4";
import Ecco_MP3 from "../../assets/AngelesCastro_EccoRespiroAppena.mp3";
import { useTranslation } from "react-i18next";

const clearLocalStorageKey = () => {
  localStorage.removeItem('T_K');
  localStorage.removeItem('O_K');
  localStorage.removeItem('S_K');
  localStorage.removeItem('E_K');
  localStorage.removeItem('F_E');
  localStorage.removeItem('F_U');
};

export default function UserLoggedIn() {
  const { t } = useTranslation();

  useEffect(() => {
    clearLocalStorageKey();
  }, []);

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
              <h3>
                <span className="muyOpera-text-color">
                  <strong>muyÓpera</strong>
                </span>
              </h3>
              <p  dangerouslySetInnerHTML={{ __html: t("USERLOGGEDIN_subtitle") }} />
              {/* <br /> */}
              <p>{t("USERLOGGEDIN_p1")}</p>
              <p>{t("USERLOGGEDIN_p2")}</p>
              <p>{t("USERLOGGEDIN_p3")}</p>
              <p>{t("USERLOGGEDIN_p4")}</p>
              <p>{t("USERLOGGEDIN_p5")}</p>
              <p>{t("USERLOGGEDIN_p6")}</p>
              {/* <video controls height={180} autoPlay>
                <source src={Ecco} type="video/mp4" />
              </video> */}
              <audio controls autoPlay>
                <source src={Ecco_MP3} type="audio/mp3" />
              </audio>
              <p>{t("USERLOGGEDIN_p7")}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container text-center">
        <iframe
          width="400"
          height="300"
          src="https://www.youtube.com/embed/fn7ImnM1fTs"
          title="Angeles Castro - Ecco Respiro Appena.avi"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div> */}
      <Footer />
    </Box>
  );
}
