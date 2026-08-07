import logo from "../logo.png";

function Header() {
  return (
    <div className="logo">
      <img
        src={logo}
        alt="Little Lemon Logo"
        className="logo-image"
      />
    </div>
  );
}

export default Header;