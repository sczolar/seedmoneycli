import React from "react";
import "./success.css";
import createHash from "hash-generator";

const far = [
  {
    id: 2367,
    name: "Ragu",
    hash: "",
  },
  {
    id: 2723,
    name: "kamal",
    hash: "",
  },
  {
    id: 4556,
    name: "selva",
    hash: "",
  },
  {
    id: 9834,
    name: "gopinath",
    hash: "",
  },
];

const Success = () => {
  return (
    <>
      <div className="far-data">
        <h1>Farmer Data</h1>
        <div className="far-details">
          {far.map((a) => {
            let hash = createHash(32);
            return (
              <div className="farmer">
                <div className="far-con">
                  <label>Farmer Id</label>
                  <h4>{a.id}</h4>
                </div>
                <div className="far-con">
                  <label>farmer Name</label>
                  <h4>{a.name}</h4>
                </div>
                <div className="far-con">
                  <label>Hash</label>
                  <h4>{hash}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Success;
