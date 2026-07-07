import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        FIT<span>ZONE</span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#trainers">Trainers</a></li>
        <li><a href="#membership">Membership</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#membership" className="join-btn">
      Join Now
      </a>
     </nav>
  );
}

export default Navbar;

