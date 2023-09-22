import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import Header from "../../components/Header/Header";
import Navbar_User from "../../components/Navbar_User/Navbar_User";
import Footer from "../../components/Footer/Footer";
import "../../style.css";
import { useTranslation } from "react-i18next";

interface FoundObject {
  id: number;
  name: string;
  city: string;
  address: string;
  aphoras: string;
  telephone: string;
  image: string;
}

// export default function SearchResults(searchQuery: string) {
export default function SearchResults() {
  const { results } = useParams();
  const parsedResults: FoundObject[] | undefined = results ? JSON.parse(decodeURIComponent(results)) : undefined;
  console.log(parsedResults);

  // const [foundData, setFoundData] = useState<FoundObject[] | null>(null);

  const { t } = useTranslation();

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(`http://localhost:3000/object/${searchQuery}`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       if (response.ok) {
  //         const wordData: FoundObject[] = await response.json();
  //         setFoundData(wordData);
  //         console.log(wordData);
  //         console.log(foundData);
  //         // localStorage.setItem(OPERA_KEY, JSON.stringify(data));
  //       } else {
  //         console.error("Error al hacer fetch de los datos");
  //       }
  //     } catch (error) {
  //       console.error("Error al hacer fetch de los datos:", error);
  //     }
  //   }
  //   fetchData();
  // }, [searchQuery]);

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
              <h3>{t("SEARCHRESULTS_title")}</h3>
              <p>{t("SEARCHRESULTS_p1")}</p>

              {/* {foundData && foundData.length > 0 ? (
                <div>
                  {foundData.map((obj) => (
                    <div key={obj.id}>
                      <img src={obj?.image} alt={obj?.image} height={100} />
                      <p>{t("SEARCHRESULTS_data1")} {obj.name}</p>
                      <p>{t("SEARCHRESULTS_data2")} {obj.city}</p>
                      <p>{t("SEARCHRESULTS_data3")} {obj.address}</p>
                      <p>{t("SEARCHRESULTS_data4")} {obj.aphoras}</p>
                      <p>{t("SEARCHRESULTS_data5")} {obj.telephone}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>{t("SEARCHRESULTS_notFound")}</p>
              )} */}

              {parsedResults && parsedResults.length > 0 ? (
                <div>
                  {parsedResults.map((obj) => (
                    <div key={obj.id}>
                      <img src={obj?.image} alt={obj?.image} height={100} />
                      <p>{t("SEARCHRESULTS_data1")} {obj.name}</p>
                      <p>{t("SEARCHRESULTS_data2")} {obj.city}</p>
                      <p>{t("SEARCHRESULTS_data3")} {obj.address}</p>
                      <p>{t("SEARCHRESULTS_data4")} {obj.aphoras}</p>
                      <p>{t("SEARCHRESULTS_data5")} {obj.telephone}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>{t("SEARCHRESULTS_notFound")}</p>
              )}


              <br />
              <div className="registro">
                <Link to="/userLoggedIn">
                {t("SEARCHRESULTS_link")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Box>
  );
}
