import { Link } from "react-router-dom";

interface IHeader {
  title: string;
}

const Header = ({ title }: IHeader) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-medium">
      <Link to="/" className="navbar-brand">
        Basty
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse flex-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/games" className="nav-link">
              games
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
