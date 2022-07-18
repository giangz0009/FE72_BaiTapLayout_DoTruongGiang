import React from "react";
import "./card.css";

const card = (data) => {
  return (
    <div className="col col-md-6 col-lg-4 mb-5">
      <div className="card bg-light border-0 h-100">
        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
            <i className={data.icon} />
          </div>
          <h2 className="fs-4 fw-bold">{data.title}</h2>
          <p className="mb-0">{data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default card;
