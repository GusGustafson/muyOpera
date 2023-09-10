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

  const foundUserJSON = localStorage.getItem(FOUND_USER);
  const foundUser: FoundUser | null = foundUserJSON
    ? JSON.parse(foundUserJSON)
    : null;
  const id = foundUser?.id || 0;

  function onSubmit() {
    deleteUser(id);
  }

  return <DeleteUserView onSubmit={onSubmit} />;
}
