import { Link } from "react-router-dom";
import { FormikValues, Form } from "formik";
import { TextField, Button, Box } from "@mui/material";
import "../../style.css";
import { useTranslation } from "react-i18next";

interface SearchWordPageViewProps {
  formik: FormikValues;
  onSubmit_Search: () => void;
  foundWord: FoundWord | null | void;
}

const FOUND_WORD = "F_W";

interface FoundWord {
  id: number;
  name: string;
  city: string;
  address: string;
  aphoras: string;
  telephone: string;
  website: string;
  image: string;
}

export default function SearchWordPageView({
  formik,
  onSubmit_Search,
}: SearchWordPageViewProps) {
  const { values, handleChange, handleSubmit } = formik;
  const { t } = useTranslation();

  const foundWordJSON = localStorage.getItem(FOUND_WORD);
  const foundWord: FoundWord[] | null = foundWordJSON
  ? JSON.parse(foundWordJSON)
  : null;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mx: "auto",
        width: "80%",
      }}
    >
      <h3>{t("SEARCHWORDPAGE_title")}</h3>
      <p>{t("SEARCHWORDPAGE_p1")}</p>
      <Form onSubmit={handleSubmit}>
        <TextField
          margin="dense"
          color="warning"
          required
          fullWidth
          id="searchQuery"
          label={t("SEARCHWORDPAGE_field")}
          name="searchQuery"
          // defaultValue={foundUser?.id} // NO PONER "defaultValue" Y "value", que casca
          value={values.searchQuery} // NO PONER "defaultValue" Y "value", que casca
          onChange={handleChange}
          autoFocus
        />
        <Button
          id="searchWordButton"
          variant="contained"
          sx={{ mt: 1 }}
          size="large"
          color="warning"
          onClick={onSubmit_Search}
        >
          {t("SEARCHWORDPAGE_button")}
        </Button>
      </Form>
      <br />
      <h4>{t("SEARCHWORDPAGE_subtitle")}</h4>

      {foundWord && foundWord.length > 0 ? (
        <div>
          {foundWord.map((obj) => (
            <div key={obj.id}>
              <hr />
              <img src={obj?.image} alt={obj?.image} height={100} />
              <p>
                {obj.name}
                <br />
                {obj.city}
                <br />
                {obj.address}
                <br />
                {/* {obj.aphoras} */}
                {/* {obj.telephone} */}
                {obj.telephone}
                <br />
                {obj.website}
                {/* <a href={obj.website} target="_blank">{obj.website}</a> */}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>{t("SEARCHRESULTS_notFound")}</p>
        </div>
      )}

      <div className="registro">
        <Link to="/userLoggedIn">{t("SEARCHWORDPAGE_link")}</Link>
      </div>
    </Box>
  );
}
