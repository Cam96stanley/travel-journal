import globe from "./assets/globe.png";

function Header() {
  return (
    <div className="header">
      <img src={globe} className="header--img" />
      <span className="header--title">my travel journal.</span>
    </div>
  );
}

export default Header;
