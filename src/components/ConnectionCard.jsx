import React from "react";

export const ConnectionCard = ({connection}) => {

    const {firstName, lastName, photoUrl,gender, age, about} = connection;
    let count =true

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        {/* <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead> */}
        <tbody className="flex justify-center text-xl">
          {/* row 1 */}
          <tr >
            {/* <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th> */}
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-[70px] w-[70px] mr-5">
                    <img
                      src={photoUrl}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold ">{firstName+" "+lastName}</div>
                  {/* <div className="text-sm opacity-50">United States</div> */}
                </div>
              </div>
            </td>
            <td>
              {gender}
              {/* <br />
              <span className="badge badge-ghost badge-sm">
                {age}
              </span> */}
            </td>
            <td>{age}</td>
            <th>
              <button className="btn btn-ghost  text-xl">{about}</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
