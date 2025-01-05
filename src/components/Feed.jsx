import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./userCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  // console.log(feed)

  const getFeed = async () => {
    if (feed.length>=1) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if(feed.length==0) return <h1 className="flex justify-center my-10 font-bold">No New User Found</h1>

  return (
    feed.length>=1 && <div className="flex justify-center my-10">
      <UserCard user={feed[0]}/>
    </div>
  );
};

export default Feed;
