/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Logo, LogoutBtn, Button } from "../../components";

function Header() {
  const navigate = useNavigate();

  const authStatus = useSelector((state) => state.auth.isAuthenticated);

  const navItems = [
    { name: "Home", to: "/", active: true },
    { name: "Login", to: "/login", active: !authStatus },
    { name: "SignUp", to: "/signup", active: !authStatus },
    // { name: "All Posts", to: "/posts", active: authStatus },
    { name: "Add Post", to: "/add-post", active: authStatus },
  ];

  return (
    <>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>
          <nav>
            <ul className="flex items-center space-x-4">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.to}>
                      <Link to={item.to}>
                        <Button effects={true}>{item.name}</Button>
                      </Link>
                    </li>
                  )
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
