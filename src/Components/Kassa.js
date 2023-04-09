import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
function Kassa(props) {
  const { kassa } = useSelector((store) => store.kassaSlice);
  const dispatch = useDispatch();
  return (
    <div className={"row"}>
      <div className="col-md-8">
        <h1>Kassa</h1>
      </div>
      <table className="table border-1">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {kassa.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.vaqti}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Kassa;
