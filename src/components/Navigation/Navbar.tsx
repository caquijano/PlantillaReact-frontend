import jwt from "jsonwebtoken";
import "./navigation.css";
import { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import ContextSidebar from "../../context/ContextSidebar";
import Logo from "../../images/logo_green.png";
//import userJson from '../../utils/userJson'
import { IoList } from "react-icons/io5";

function Navbar() {
  const loggedUserJson = window.localStorage.getItem("loggedGreenUser") || null;
  const {position, setPosition} = useContext<any>(ContextSidebar)
  const user = JSON.parse(loggedUserJson || "");
  let decodeData, arrayUsuario, name: string, char;

  if (user) {
    decodeData = jwt.verify(user, "ikhodi");
    arrayUsuario = Object.values(decodeData);
    name = `${arrayUsuario[1]}`;
    char = name.charAt(0).toUpperCase();
  }

  //const array = userJson();
  const handleLogout = () => {
    window.localStorage.removeItem("loggedGreenUser");
  };
  function openSidebar(){
    setPosition(!position)
  }

  return (
    <div className={position ? "Navbar" : "Navbar active"} style={{float:"right"}}>
    <nav className="navbar navbar-expand-lg">
      {!position ?  
      <button
       className="btn btn-link btn-lg"
        type="button"
        style={{margin:0, paddingBlock:0, marginRight:15, border:"2px solid #18bc9c"}}
        onClick={openSidebar}
      >
       <IoList/> 
      </button>
      :
      <></>
      }
       
      <a className="navbar-brand" href="#">
        <img style={{ height: 45, margin: -10 }} src={Logo} />
      </a>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown"></li>
        </ul>
        {arrayUsuario ? (
          <div className="row my-2 my-lg-0">
            <div
              style={{
                height: 35,
                width: 35,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
                backgroundColor: "#0f7864",
              }}
            >
              <p style={{ fontSize: 20, color: "#fff", marginLeft: "30%" }}>
                {char}
              </p>
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                  {arrayUsuario[1]} {arrayUsuario[2]}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout} href="/">
                    Cerrar sesión
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
