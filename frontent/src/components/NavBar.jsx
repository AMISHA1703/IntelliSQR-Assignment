import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-primary p-4 text-white shadow-md ">
      <div className="container mx-auto flex justify-between ">
        <h1 className="text-lg font-bold">My Dashboard</h1>
        <div className="space-x-4">
          <Link to="/home" className="hover:underline">Home</Link>
          <Link to="/signup" className="hover:underline">Sign Up</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          {/* <Link to="/about" className="hover:underline">About</Link> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
