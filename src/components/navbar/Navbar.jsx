import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navText">
        <h1>Chat App</h1>
      </div>
      <div className="navRight">
        <h2>Logout</h2>
        <h2>Profile</h2>
      </div>
    </div>
  );
};

export default Navbar;
