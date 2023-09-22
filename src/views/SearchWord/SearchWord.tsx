import { useEffect } from "react";
import SearchWordView from "./SearchWordView";

const clearLocalStorageKey = () => {
  localStorage.removeItem("T_K");
  localStorage.removeItem("O_K");
  localStorage.removeItem("S_K");
  localStorage.removeItem("E_K");
  localStorage.removeItem("F_E");
  localStorage.removeItem("F_U");
  localStorage.removeItem("F_W");
};

export default function SearchWord() {
  useEffect(() => {
    clearLocalStorageKey();
  }, []);

  return <SearchWordView />;
}
