import { useNavigate } from "react-router-dom";
import DeleteUserView from "./DeleteUserView";
import { useAuthContext } from "../../contexts/AuthContext";

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

export default function DeleteUser() {
  const { deleteUser } = useAuthContext();
  const navigate = useNavigate();

  const foundUserJSON = localStorage.getItem(FOUND_USER);
  const foundUser: FoundUser | null = foundUserJSON
    ? JSON.parse(foundUserJSON)
    : null;
  const id = foundUser?.id || 0;

  async function onSubmit() {
    try {
      await deleteUser(id);
      navigate("/admin");
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  }

  return <DeleteUserView onSubmit={onSubmit} />;
}
