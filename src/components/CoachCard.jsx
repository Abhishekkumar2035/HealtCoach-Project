import React from "react";

const CoachCard = ({ coach }) => {
  return (
    <div className="staff">
      <div className="img-wrap d-flex align-items-stretch">
        <div
          className="img align-self-stretch"
          style={{ backgroundImage: `url('images/${coach.image}')` }}
        ></div>
      </div>
      <div className="text pt-3 px-3 pb-4 text-center">
        <h3>{coach.name}</h3>
        <span className="position mb-2">{coach.position}</span>
        <div className="faded">
          <p>{coach.bio}</p>
          <ul className="ftco-social text-center">
            <li className="ftco-animate">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-twitter"></span>
              </a>
            </li>
            <li className="ftco-animate">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-facebook"></span>
              </a>
            </li>
            <li className="ftco-animate">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-google"></span>
              </a>
            </li>
            <li className="ftco-animate">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-instagram"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoachCard;
