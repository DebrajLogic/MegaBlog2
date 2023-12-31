import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/");
      console.log("Logout successful");
    });
  };

  return (
    <Button effects={true} onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default LogoutBtn;
