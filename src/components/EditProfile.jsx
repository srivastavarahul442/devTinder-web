import React, { useState } from "react";
import UserCard from "./userCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl || "https://static.vecteezy.com/system/resources/previews/035/624/082/non_2x/user-profile-person-icon-in-flat-isolated-in-suitable-for-social-media-man-profiles-screensavers-depicting-male-face-silhouettes-for-apps-website-vector.jpg");
  const [age, setAge] = useState(user.age ||"");
  const [gender, setGender] = useState(user.gender||"");
  const [about, setAbout] = useState(user.about || "Hi, this is default details about user");

  const [saveMessage, setSaveMessage] = useState(false);

  const dispatch = useDispatch();

  const saveProfile = async () => {
    setSaveMessage(true);
    setTimeout(() => {
      setSaveMessage(false);
    }, 3000);
    try {
      const res = await axios.put(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.data));

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
   <div className="flex justify-center gap-10 my-10">
      <div className="flex justify-center">
        <div className="card bg-base-300 w-96 shadow-xl p-5">
          <h1 className="text-center text-lg font-bold my-3">Edit Profile</h1>
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">First Name:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-lg"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">Last Name:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-lg"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">Photo URL:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-lg"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">Age:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-lg"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">Gender:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-lg"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">About:</span>
            </div>
            <textarea
              className="textarea textarea-bordered"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </label>
          <button
            className="btn btn-primary my-4 w-[40%] mx-auto"
            onClick={saveProfile}
          >
            Save Profile
          </button>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, age, gender, photoUrl, about }} />
      {saveMessage && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
