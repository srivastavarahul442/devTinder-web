import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { removeConnection } from "../utils/connectionSlice";
import { removeFeed } from "../utils/feedSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleHome = () => {
    if(!user){
      return navigate("/login");
    }
    return navigate("/")
  }

  const handleLogout = async () => {
    try {
      const res = await axios.post(BASE_URL + "/logout",{}, {
        withCredentials: true,
      });
      dispatch(removeUser())
      dispatch(removeFeed())
      dispatch(removeConnection())
      navigate("/login")
    } catch (err) {
      //
    }
  };

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a onClick={handleHome} className="btn btn-ghost text-xl">
          👩‍💻CodeMate👨‍💻
        </a>
      </div>
      <div className="flex-none gap-2">
        {user && <p>Welcome, {user.firstName}</p>}
        <div className="dropdown dropdown-end mx-5">
          {user && (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoUrl} />
              </div>
            </div>
          )}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/profile"} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/connections">Connections</Link>
            </li>
            <li>
              <Link to="/requests">Requests</Link>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
