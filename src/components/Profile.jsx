import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const loggedInUser = useSelector((store) => store.user);
  return (
    loggedInUser && <div>
      <EditProfile user={loggedInUser} />
    </div>
  );
};

export default Profile;
