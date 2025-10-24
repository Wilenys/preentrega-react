import "./Header.css";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/Logo.jpg" alt="Logo del sitio" className="logo" />
      </div>
      <Nav />
    </header>
  );
};