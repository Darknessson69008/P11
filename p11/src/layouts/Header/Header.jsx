import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logoHeader from "../../assets/img/argentBankLogo.webp";
import { setLogout } from "../../Redux/Reducers/SignInReducer";

export default function Header() {
  const token = useSelector((state) => state.signIn.token);

  const dataUser = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const handleLogout = () => {
    // si l'utilisateur est connecté, suprresion du token pour se deconnecter
    if (token) {
      const tnk = "";
      dispatch(setLogout({ tnk }));
    }
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="./">
        <img className="main-nav-logo-image" src={logoHeader} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token && (
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {dataUser.firstName}
          </Link>
        )}
        <Link className="main-nav-item" to={token ? "/" : "./sign-in"} onClick={handleLogout}>
          {token ? <i className="fa fa-arrow-right fa-lg"></i> : <i className="fa fa-user-circle"></i>}
          {token ? "Sign Out" : "Sign-in"}
        </Link>
      </div>
    </nav>
  );
}
