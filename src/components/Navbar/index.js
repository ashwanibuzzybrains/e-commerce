import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";

import "./index.css";

const Header = (props) => {
  const onClickLogout = async () => {
    const { history } = props;
    Cookies.remove("jwt_token");
    await signOut(auth);
    history.replace("/login");
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6jLESl1KtTw2vBHKy1W95A3RhrmlPzjN83g&usqp=CAU"
              alt="website logo"
            />
          </Link>
        </div>
        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6jLESl1KtTw2vBHKy1W95A3RhrmlPzjN83g&usqp=CAU"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
            <li className="nav-menu-item">
              <button onClick={onClickLogout} className="nav-link">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-img"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Header);
