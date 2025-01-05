import React from "react";

export const ConnectionCard = ({ connection }) => {
  const { firstName, lastName, photoUrl, gender, age, about } = connection;
  let count = true;

  return (
    <div className="overflow-x-auto  w-1/2 mx-auto my-2 ">
      <table className="table ">
        <tbody className=" text-xl ">
          <tr className="">
            <td className="w-3/7">
              <div className="w-20"><img src={photoUrl} className="rounded-3xl w-20" alt="Avatar Tailwind CSS Component" /></div>
            </td>
            <td className="w-2/7">
              <div className="font-bold ">{firstName + " " + lastName}</div>
            </td>
            <td className="w-1/7">{gender}</td>
            <td className="w-1/7">
              <p className="">{about}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
