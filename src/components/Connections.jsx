import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { ConnectionCard } from "./ConnectionCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);

  const fetchConnections = async () => {
    const res = await axios.get(BASE_URL + "/user/connections", {
      withCredentials: true,
    });
    dispatch(addConnections(res?.data?.data));
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  console.log(connections);

  if (!connections === 0)
    return (
      <h1 className="text-center font-bold text-2xl my-10">
        No Connections found !!!
      </h1>
    );

  return (
    <div>
      <h1 className="text-center font-bold text-2xl my-10">Connections</h1>

      {connections.map((connecion) => (
        <ConnectionCard connection={connecion} />
      ))}
    </div>
  );
};

export default Connections;
