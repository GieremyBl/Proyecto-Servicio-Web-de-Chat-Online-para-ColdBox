import { useContext } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Notifications from "./Chat/Notifications";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <Navbar bg="black" className="mb-4" style={{ height: "10.75 rem" }}>
      <Container>
        <h2>
          <Link to="/" className="link-light text-decoration-none">
            <img
              src = "/src/assets/coldbox-logo.png" alt = "logo" style = {{height: "2.5 rem"}}
            />
            Chat Online
          </Link>
          </h2>
        {user && <span className="text-warning">Logged in as {user.name}</span>}
        <Nav>
          <Stack direction="horizontal" gap={3}>
            {!user && (
              <>
                <Link to="/login" className="link-light text-decoration-none">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="link-light text-decoration-none"
                >
                  Register
                </Link>
              </>
            )}

            {user && (
              <>
                <Notifications />
                <Link
                  onClick={() => logoutUser()}
                  to="/login"
                  className="link-light text-decoration-none"
                >
                  Logout
                </Link>
              </>
            )}
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
