import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import { addConnections } from "../utils/connectionSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);

  const reviewRequest = async (requestId, status) => {
    const res = await axios.post(
      BASE_URL + `/request/review/${status}/${requestId}`,
      {},
      {
        withCredentials: true,
      }
    );

    console.log(status);
    fetchRequest();
  };

  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(addRequest(res?.data));
    } catch (err) {
      //console.error(err)
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);
  console.log(requests);

  if (!requests) return;

  return (
    <>
      {requests.map((request) => {
        const { firstName, lastName, about, photoUrl } = request.fromUserId;
        return (
          <div
            key={request._id}
            className="flex  rounded-xl p-2 my-4 mx-auto w-1/2 items-center bg-base-300 "
          >
            <div className="w-1/6">
              <img className="w-[100px] rounded-[35%]" src={photoUrl} />
            </div>
            <div className="w-3/6">
              <h1 className="font-bold text-lg">
                {firstName + " " + lastName}
              </h1>
              <p>{about}</p>
            </div>
            <div className="w-2/6 flex justify-evenly">
              <button className="btn btn-primary  text-lg">Reject</button>
              <button
                className="btn btn-secondary text-lg"
                onClick={(e) => reviewRequest(request._id,"accepted")}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Requests;
